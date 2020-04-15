import React from 'react';
import { ScrollView, StatusBar } from 'react-native'
import { Card } from 'react-native-paper'
import SexChart from "./components/SexChart";
import NumberDisplay from "./components/NumberDisplay";
import ChinaDataTable from "./components/ChinaDataTable";
import ChinaMap from "./components/ChinaMap";

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

