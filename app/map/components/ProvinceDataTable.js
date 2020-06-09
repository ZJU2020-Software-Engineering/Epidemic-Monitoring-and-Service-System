import * as React from 'react';
import { DataTable } from 'react-native-paper';
import time from './tools/time';
import axios from 'axios'
import {server_config} from '../config'

const max_number = 100000000;

//intialize store array for table
var cur_confirm = new Array();
var new_confirm = new Array();
var total_confirm = new Array();
var provinces = new Array();
// get from back end
var provinces_length = 34;
var curDate = time.formatDate(new Date(new Date().getTime() - 6*60*60*1000), 'yyyy-MM-dd');
// for table view
var idx_ = new Array();
for (var i=0; i<provinces_length; i++) {
  idx_[i] = i;
}
var same = 0;
var now_descending = 0;
var last = 'null';

export default class ProvinceDataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {idx: idx_,Update:true};
    axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'city','Data':curDate,'Province':this.props.province})
        .then((res)=>{
            cur_confirm = [];
            new_confirm = [];
            total_confirm = [];
            provinces = [];
            console.log(cur_confirm)
            if(res.data.result=='Y'){ 
                for (var i=0; i<res.data.message.extance.length; i++) {
                    provinces[i] = res.data.message.extance[i].city;
                    cur_confirm[i] = res.data.message.extance[i].confirmedNumber;
                    new_confirm[i] = res.data.message.newAddtion[i].confirmedNumber;
                    total_confirm[i] = res.data.message.newAddtion[i].confirmedNumber;
                }
                this.setState({Update:false},()=>{})
        }});
  }

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

  render() {
      if (this.state.update) {
          return null
      }

      let rows = [];

      for (let id = 0; id < cur_confirm.length; id ++) {
        rows[id] = (
            <DataTable.Row>
                <DataTable.Cell>{provinces[this.state.idx[id]]}</DataTable.Cell>
                <DataTable.Cell numeric>{cur_confirm[this.state.idx[id]]}</DataTable.Cell>
                <DataTable.Cell numeric>{new_confirm[this.state.idx[id]]}</DataTable.Cell>
                <DataTable.Cell numeric>{total_confirm[this.state.idx[id]]}</DataTable.Cell>
            </DataTable.Row>
        )
      }

    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title >市</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(cur_confirm)} numeric>现存确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(new_confirm)} numeric>新增确诊</DataTable.Title>
          <DataTable.Title onPress={() => this.my_sort(total_confirm)} numeric>累计确诊</DataTable.Title>
        </DataTable.Header>

          {
              rows
          }

      </DataTable>
    );
  }
}