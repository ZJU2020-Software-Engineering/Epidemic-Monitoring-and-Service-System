const URL = 'http://192.168.43.226:4000';

import Axios from 'axios';

let instance = Axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export async function GetItem(userName) {
    let data = {account: userName};
    let result = await instance.get('/request/item/selectm_id', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

export async function InsertOrder(id, m_id, t_id, item_list, total_price, v_id, stat, payment) {
    let data = {id, m_id, t_id, item_list, total_price, v_id, stat, payment};
    console.log(data);
    instance.post('/request/shoppingOrder/insert', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

export async function GetCurrentOrder(merchant_id) {
    let data = {merchant_id: merchant_id};
    let result = await instance.get('/request/shoppingOrder/selectid', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}