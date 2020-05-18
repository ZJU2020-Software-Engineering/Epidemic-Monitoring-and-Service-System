import * as React from 'react';
import * as Font from 'expo-font';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {ItemList} from "./ItemList";
import {OrderList} from "./OrderList";

const CartRoute = () => (
    <View style={styles.scene} >
        <ItemList />
    </View>
);

const OrderRoute = () => (
    <View style={styles.scene} >
        <OrderList />
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function App() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'cart', title: '购物车' },
        { key: 'order', title: '订单' },
    ]);

    const renderScene = SceneMap({
        cart: CartRoute,
        order: OrderRoute,
    });

    Font.loadAsync(
        'antoutline',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    Font.loadAsync(
        'antfill',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );

    return (
        <View style={{ marginTop: 50, flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});