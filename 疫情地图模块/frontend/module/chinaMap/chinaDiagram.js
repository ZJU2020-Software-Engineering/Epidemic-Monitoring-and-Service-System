import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, StyleSheet} from 'react-native';

const max_number = 100000000;

//intialize store array for table
var cur_confirm = new Array();
var new_confirm = new Array();
var total_confirm = new Array();
var total_cure = new Array();
var total_die = new Array();
// get from back end
var provinces_length = 33;
var provinces = ["湖北", "香港", "台湾", "北京", "广东", "福建", "天津",
 "浙江", "澳门", "内蒙古", "江苏", "山东", "甘肃", "四川", "辽宁", "陕西", "云南",
 "河北", "吉林", "山西", "重庆", "河南", "黑龙江", "广西", "贵州", "江西", "海南",
 "西藏", "湖南", "安徽", "宁夏", "青海", "新疆"];
for (var i=0; i<provinces_length; i++) {
  cur_confirm[i] = Math.floor(Math.random()*100);
  new_confirm[i] = Math.floor(Math.random()*100);
  total_confirm[i] = Math.floor(Math.random()*100);
  total_cure[i] = Math.floor(Math.random()*100);
  total_die[i] = Math.floor(Math.random()*100);
}

// for table view
var idx_ = new Array();
for (var i=0; i<provinces_length; i++) {
  idx_[i] = i;
}
var same = 0;
var now_descending = 0;
var last = 'null';

export default class chinaDiagram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {idx: idx_};
  }
  // get descending or increasing order of attr_num, store them into idx
  // idx as state, can refresh table automatically
  my_sort(attr_num, attr_name) {
    if (attr_name == last && now_descending == 1) {
      now_descending = 0;
      last = attr_name;
      // increasing
      var already = new Array();
      for (var i=0; i<provinces_length; i++) {
        already[i] = 0;
      }
      for (var i=0; i < provinces_length; i++ ) {
        var min_val = max_number;
        var min_idx = -1;
        for (var j=0; j<provinces_length; j++) {
          if (already[j] == 0 && attr_num[j] < min_val) {
            min_val = attr_num[j];
            min_idx = j;
          }
        }
        idx_[i] = min_idx;
        already[min_idx] = 1;
      }
    } 
    else {
      now_descending = 1;
      last = attr_name;
      // descending
      var already = new Array();
      for (var i=0; i<provinces_length; i++) {
        already[i] = 0;
      }
      for (var i=0; i < provinces_length; i++ ) {
        var max_val = -1;
        var max_idx = -1;
        for (var j=0; j<provinces_length; j++) {
          if (already[j] == 0 && attr_num[j] > max_val) {
            max_val = attr_num[j];
            max_idx = j;
          }
        }
        idx_[i] = max_idx;
        already[max_idx] = 1;
      }
    }   
    this.setState({idx: idx_});
  }
  // use tableview

  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title >省份</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(cur_confirm)} numeric>现存确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(new_confirm)} numeric>新增确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_confirm)} numeric>累计确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_cure)} numeric>累计治愈</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_die)} numeric>累计死亡</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[0]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[0]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[1]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[1]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[2]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[2]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[3]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[3]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[4]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[4]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[5]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[5]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[6]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[6]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[6]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[6]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[6]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[6]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[7]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[7]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[7]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[7]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[7]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[7]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[8]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[8]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[8]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[8]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[8]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[8]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[9]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[9]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[9]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[9]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[9]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[9]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[10]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[10]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[10]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[10]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[10]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[10]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[11]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[11]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[11]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[11]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[11]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[11]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[12]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[12]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[12]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[12]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[12]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[12]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[13]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[13]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[13]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[13]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[13]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[13]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[14]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[14]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[14]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[14]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[14]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[14]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[15]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[15]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[15]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[15]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[15]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[15]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[16]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[16]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[16]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[16]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[16]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[16]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[17]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[17]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[17]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[17]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[17]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[17]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[18]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[18]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[18]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[18]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[18]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[18]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[19]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[19]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[19]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[19]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[19]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[19]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[20]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[20]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[20]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[20]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[20]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[20]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[21]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[21]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[21]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[21]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[21]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[21]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[22]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[22]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[22]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[22]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[22]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[22]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[23]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[23]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[23]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[23]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[23]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[23]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[24]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[24]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[24]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[24]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[24]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[24]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[25]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[25]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[25]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[25]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[25]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[25]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[26]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[26]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[26]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[26]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[26]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[26]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[27]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[27]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[27]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[27]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[27]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[27]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[28]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[28]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[28]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[28]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[28]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[28]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[29]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[29]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[29]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[29]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[29]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[29]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[30]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[30]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[30]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[30]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[30]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[30]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[31]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[31]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[31]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[31]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[31]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[31]]}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
           <DataTable.Cell>{provinces[this.state.idx[32]]}</DataTable.Cell>
           <DataTable.Cell numeric>{cur_confirm[this.state.idx[32]]}</DataTable.Cell>
           <DataTable.Cell numeric>{new_confirm[this.state.idx[32]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_confirm[this.state.idx[32]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_cure[this.state.idx[32]]}</DataTable.Cell>
           <DataTable.Cell numeric>{total_die[this.state.idx[32]]}</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 25,
    paddingBottom: 20,
  },
});
