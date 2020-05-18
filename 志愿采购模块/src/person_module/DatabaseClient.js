const URL = 'http://192.168.0.100:4000';

import Axios from 'axios';

let instance = Axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export async function GetOrderList_tenant(id) {
    let data = {t_id: id};
    let result = await instance.get('/request/shoppingOrder/selecttid', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

export async function GetHistoryOrderList_tenant(id) {
    let data = {t_id: id};
    let result = await instance.get('/request/shoppingOrder/selecttidHistory', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}