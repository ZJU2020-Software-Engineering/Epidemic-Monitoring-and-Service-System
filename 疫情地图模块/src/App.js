import React from 'react';
import { ScrollView, StatusBar } from 'react-native'
import  Card  from 'react-native-paper'
import SexChart from "./components/SexChart.js";


import ChinaDataTable from "./components/ChinaDataTable.js";
import ChinaMap from "./components/ChinaMap.js";
import NumberDisplay from "./components/NumberDisplay.js";
export default function App() {

  return (
      <ScrollView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          
          <NumberDisplay />
          <Card>
              <Card.Title title="中国疫情地图" />
              <Card.Content>
                  <ChinaMap />
              </Card.Content>
          </Card>
          <Card>
              <Card.Title title="国内疫情数据" />
              <Card.Content>
                  <ChinaDataTable />
              </Card.Content>
          </Card>
          <Card>
              <Card.Title title="性别比" />
              <Card.Content>
                  <SexChart />
              </Card.Content>
          </Card>
      </ScrollView>
  );
}

