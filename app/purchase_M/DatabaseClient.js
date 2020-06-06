const URL = 'http://10.180.116.178:4000';

import Axios from 'axios';

let instance = Axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export async function GetMerchantInfo(userName) {
    let data = {account: userName};
    console.log('account: ' + data.account);
    let result = await instance.get('/request/merchant/select', {
        params: data
    }).then(function (response) {
        // console.log('success');
        return response.data.message;
    }).catch(function (error) {
        // console.log('error');
        console.log(error);
    });
    return result;
}

export function ChangePassword(userName, password) {
    let data = {account: userName, password: password};
    instance.post('/request/merchant/updatePassword', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

export function ChangeConnection(userName, phone, email) {
    let data = {account: userName, phone: phone, email: email};
    instance.post('/request/merchant/updateConnection', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

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

export async function GetItemInfo(id) {
    let data = {id: id};
    let result = await instance.get('/request/item/selectid', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

export async function UpdateItem(id, weight, stock, payment, production_date) {
    let data = {id: id, weight: weight, stock: stock, payment: payment, production_date: production_date};
    instance.post('/request/item/updateItem', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

export async function InsertItem(id, merchant_id, weight, stock, payment, production_date, shelf_life) {
    let data = {id: id, merchant_id: merchant_id, weight: weight, stock: stock, payment: payment, production_date: production_date, shelf_life: shelf_life};
    console.log(data);
    instance.post('/request/item/insert', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

export async function GetHistoryOrder(merchant_id) {
    let data = {merchant_id: merchant_id};
    let result = await instance.get('/request/shoppingOrder/selectidhistory', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
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

export function ChangeStat(OrderID) {
    let data = {id: OrderID};
    console.log(data);
    instance.post('/request/shoppingOrder/updateStat', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}

export async function GetOrderInfo(id) {
    let data = {id: id};
    let result = await instance.get('/request/shoppingOrder/selectorderid', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}
