import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from '@ant-design/react-native';
import { UltimateListView } from 'react-native-ultimate-listview';
import { searchPostDataAsync } from './utls';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false,
            networkErr: 0, //0:无异常 1:网路异常 2:超时
            keyWords: '',
            isReady: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync(
            'antoutline',
            // eslint-disable-next-line
            require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        );

        await Font.loadAsync(
            'antfill',
            // eslint-disable-next-line
            require('@ant-design/icons-react-native/fonts/antfill.ttf')
        );
        // eslint-disable-next-line
        this.setState({ isReady: true });
    }

    keyWordsList = [];

    setKeyWords = (keyWords) => {
        this.setState({ keyWords: keyWords });
        this.keyWordsList = keyWords.split(/\ +/);
    }

    _emptyView = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.networkErr == 2 ? '网络好像延时很高哦' :
                        this.state.networkErr == 1 ? '网络好像出现了故障' :
                            '没有找到任何内容'}
                </Text>
            </View>
        );
    }

    _getData = async (keyWords, postNum = 10) => {
        let timeThreshold = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(2);
            }, 1000);  //设置10s的超时阈值
        });

        let errDetect = 0;
        let postDate = await Promise.race([timeThreshold, searchPostDataAsync(keyWords, postNum)])
            .then((value) => {
                return value;
            })
            .catch((err) => {
                errDetect = err;
                this.setState({ networkErr: err });
                return [];
            });

        return new Promise((resolve, reject) => {
            if (errDetect != 0)
                reject([]);
            else
                resolve(postDate);
        });
    }

    _onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            let pageLimit = 10; //设置一页显示的条目数
            let rowData = [];
            console.log(this.state.search)
            if (this.state.search) {
                rowData = await this._getData(this.keyWordsList, pageLimit);
            }
            //开始提取数据
            console.log(`数据获取完毕-${page}`);
            console.log(rowData);
            startFetch(rowData, pageLimit);
        } catch (err) {
            //err为网络参数
            abortFetch(); //停止
        }
    }

    //刚开始获取数据时显示的内容
    _renderPaginationFetchingView = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>正在搜索数据</Text>
            </View>
        );
    }

    //显示完所有数据以后显示的内容
    _renderPaginationAllLoadedView = () => {
        return (
            <Text style={styles.pageTail}>没有更多的数据了</Text>
        );
    }

    _extraKeyWords = (content) => {
        console.log(content)
        let res = [];
        let patt = new RegExp('[' + this.keyWordsList.join('|') + ']+', 'g');
        let extraKey = content.match(patt);
        if (extraKey == null) {
            res.push(<Text>{content}</Text>)
        }
        else {
            let first = content.indexOf(extraKey[0])
            let splitContent = content.split(patt)
            let i = 0
            let j = 0
            if (first > 0) {
                while (i < extraKey.length && j < splitContent.length) {
                    res.push(<Text>{splitContent[j++]}</Text>)
                    res.push(<Text style={{ color: 'red' }}>{extraKey[i++]}</Text>)
                }
                if (j < splitContent.length) {
                    res.push(<Text>{splitContent[j++]}</Text>)
                }
            }
            else {
                while (i < extraKey.length && j < splitContent.length) {
                    res.push(<Text style={{ color: 'red' }}>{extraKey[i++]}</Text>)
                    res.push(<Text>{splitContent[j++]}</Text>)
                }
                if (j < splitContent.length) {
                    res.push(<Text style={{ color: 'red' }}>{extraKey[i++]}</Text>)
                }
            }
        }
        return (
            <Text>
                {res.map((value, index, arr) => value)}
            </Text>
        );

    }

    _renderItem = (item, index) => {
        return (
            <TouchableOpacity
                onPress={(event) => { this.props.navigation.navigate('PostDetail', { post_id: item.post_id }) }}
                activeOpacity={0.7}
            >
                <View style={styles.post}>
                    <Text style={styles.postHeader}>
                        <Text>{this._extraKeyWords(item.post_title)}</Text>
                    </Text>
                    <Text style={styles.postBody}>
                        <Text style={styles.poster}>{`${item.user_name}:`}</Text>
                        {this._extraKeyWords(item.content)}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _formatDateString = (timestamp) => {
        let time = new Date(timestamp);
        return (`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`);
    }

    _renderSeperator = () => {
        return (
            <View style={{ height: 1, backgroundColor: '#E6E6FA' }}></View>
        );
    }

    _onCancel = () => {
        this.setKeyWords('');
        this.state.search = false;
        this.listView.refresh();
    }

    _onChange = (keywords) => {
        this.setKeyWords(keywords);
    }

    _onSubmit = (keyWords) => {
        this.setKeyWords(keyWords);
        this.state.search = true;
        this.listView.refresh();
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />
        }
        return (
            <View style={styles.searchContainer}>
                <View>
                    <Text>search:{this.state.search ? 'true' : 'false'}</Text>
                    <Text>keywords:{this.state.keyWords}</Text>
                </View>
                <SearchBar
                    value={this.state.keyWords}
                    placeholder='输入关键词搜索'
                    onSubmit={this._onSubmit}
                    onChange={this._onChange}
                    onCancel={this._onCancel}
                    showCancelButton={true}
                />
                <View>
                    <UltimateListView
                        ref={(ref) => this.listView = ref}
                        keyExtractor={(item, index) => `${item.post_id}-${index}`}
                        getItemLayout={(data, index) => ({
                            length: styles.post.height,
                            offset: (styles.post.height + 1) * index,
                            index
                        })}
                        onFetch={this._onFetch}
                        item={this._renderItem}
                        paginationFetchingView={this._renderPaginationFetchingView}
                        paginationAllLoadedView={this._renderPaginationAllLoadedView}
                        emptyView={this._emptyView}
                        separator={this._renderSeperator}
                        refreshableMode='advanced'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /**
     * 这里是UI，保证各个页面的UI在这里修改
     */
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'red',
        backgroundColor: '#AEEEEE',
        height: 24,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
	post: {
		flexDirection: 'column',
		height: 100,
		backgroundColor: '#FFFFFF',
		paddingLeft: 10,
		paddingRight: 10,
	},
	postHeader: {
		height: 50,
		fontSize: 20,
		fontWeight:"bold",
		paddingBottom:10,
		paddingTop:10,
	},
	postBody: {
		height: 30,
		fontSize: 12,
	},
    pageTail: {
        fontSize: 12
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default SearchPage;
