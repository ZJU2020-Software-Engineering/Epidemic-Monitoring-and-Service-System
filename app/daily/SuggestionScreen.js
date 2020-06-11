import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function SuggestionScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        单独隔离
      </Text>
      <Text style={styles.instructions}>
        一个居住地址只能居家隔离一人或一家。
      </Text>
      <Text style={styles.instructions}>
        如与家人共同居住，家人必须承诺共同居家隔离。一人一间，保持相对独立，尽量不离开隔离房间，避免与家人近距离接触。
      </Text>
      <Text style={styles.instructions}>
        不得外出，谢绝会客。
      </Text>
      <Text style={styles.title}>
      室内清洁
      </Text>
      <Text style={styles.instructions}>
        如与家人共同居住，停止使用中央空调，保持隔离房间随时关闭，在隔离房间开门前，应先开窗通风后再开门。
      </Text>
      <Text style={styles.instructions}>
       经常开窗通风，至少每2-4小时开窗通风一次，每次20-30分钟。
      </Text>
      <Text style={styles.instructions}>
      经常做好居室的日常清洁工作，对分泌物污染的物品或经常触摸的物品进行消毒。桌椅、门把手等可使用500mg/L含氯（溴）消毒液（5%84消毒剂与水1:99稀释）或1%过氧化氢消毒湿巾进行消毒（操作时戴好手套）；体温计、手机等可使用75%医用酒精棉球或棉片擦拭消毒。含氯（溴）消毒剂使用时需按说明书配制使用。
      </Text>
      <Text style={styles.title}>
        经常洗手
      </Text>
      <Text style={styles.instructions}>
        用洗手液或肥皂加流动水按“七步洗手法”正确洗手。
      </Text>
      <Text style={styles.instructions}>
        与共同隔离人员接触前以及触摸了污染物品和共用物品后要洗手。
      </Text>
      <Text style={styles.title}>
        佩戴口罩
      </Text>
      <Text style={styles.instructions}>
        独处时，可以不戴口罩。
      </Text>
      <Text style={styles.instructions}>
        与共同隔离人员接触时，请佩戴口罩。
      </Text>
      <Text style={styles.instructions}>
        戴口罩前、丢弃使用过的口罩后，均需要及时洗手。
      </Text>
      <Text style={styles.title}>
        用品处理
      </Text>
      <Text style={styles.instructions}>
        餐具使用后，可煮沸消毒或使用餐具消毒柜消毒。
      </Text>
      <Text style={styles.instructions}>
        用过的纸巾、口罩及生活废弃物丢入专门的带盖垃圾桶内，交由工作人员专门处理。
      </Text>
      <Text style={styles.instructions}>
        如有家庭成员共同隔离，生活用品需单独使用，避免交叉污染。
      </Text>
      <Text style={styles.title}>
        生活规律
      </Text>
      <Text style={styles.instructions}>
        保持充足的休息，不熬夜。
      </Text>
      <Text style={styles.instructions}>
        单独就餐，食物要清淡、多样化，保证营养充足。
      </Text>
      <Text style={styles.instructions}>
        保持平和的心态，积极面对。
      </Text>
      <Text style={styles.title}>
        主动监测
      </Text>
      <Text style={styles.instructions}>
        如实回答工作人员的健康询问。
      </Text>
      <Text style={styles.instructions}>
        积极配合每日上、下午各一次的体温测量并做好记录。
      </Text>
      <Text style={styles.instructions}>
        出现发热、咳嗽等症状，立即电话联系工作人员。
      </Text>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',

  },
  title: {
    color: '#000',
    fontSize: 30,
    marginHorizontal: 15,
    lineHeight: 50.00,
  },
  instructions: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 15,
    lineHeight: 30.00,
  },
});
