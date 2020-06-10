import {UltimateListView} from "react-native-ultimate-listview"

export default class HomePageList extends UltimateListView{

    constructor(props){
        super(props);
    }

    onRefresh = () =>{
        console.log('onRefresh()');
        console.log(this.mounted);
        if (this.mounted) {
            console.log('mounted');
            this.setState({
                isRefreshing: true
            })
            this.setPage(1);
            this.props.refresh();
        }
    }
} 