const URL = 'http://10.181.166.167:4000';

import Axios from 'axios';

let instance = Axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});



export async function GetUserInfo(username) {
    let data = {username: username};
    console.log('Hello, world0');
    let result = await instance.get('/request/personaluserinfo/select', {
        params: data
    }).then(function (response) {
        console.log('Hello, world1');
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
        console.log('Hello, world2');
    });
    return result;
}

export function ChangeStat(username, status) {
    let data = {username: username, status: status};
    instance.post('/request/personaluserinfo/updateStat', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}


////////////////  报名志愿活动，更新已报名人数

export function SignUpActivity(va_id) {
    let data = {va_id:va_id};
    instance.post('/request/volunteerActivity/updateState', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}


////////////////  获取可报名活动列表信息

export async function GetActivityList() {
    console.log("bbbbbbbbbbb");
    let data = {};
    let result = await instance.get('/request/volunteerActivity/select',
                                
     {
        params: data
    }).then(function (response) {
        console.log("aaaaaaaaaaaa");
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

////////////////  更新个人活动列表

export function ChangeActivityListPerson(v_id, va_id,time) {
    let data = {v_id: v_id, va_id: va_id,time:time};
    instance.post('/request/volunteerTaken/insert', data
    ).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}


////////////////  显示已报名志愿活动列表
export async function GetActivityPerson(v_id) {
    let data = {v_id:v_id};
    let result = await instance.get('/request/volunteerTaken/select', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

////////////////  获得某项志愿活动的具体信息
export async function GetActivityDetailInfo(id) {
    let data = {id:id};
    let result = await instance.get('/request/volunteerActivity/detailinfo', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

////////////////  检查某人是否已经报名某项活动
export async function CheckActivityPerson(v_id,va_id) {
    let data = {v_id:v_id,va_id:va_id};
    let result = await instance.get('/request/volunteerTaken/check', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}


////////////////  获取待配送订单列表
export async function GetOrderToSend(v_id) {
    let data = {v_id: v_id};
    console.log(data);
    let result = await instance.get('/request/shoppingOrder/selectToSendOrder', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

///////////////   更新订单状态为已经送达


export function UpdateOrderState(id) {
    console.log("******************");
    let data = {id: id};
    instance.post('/request/shoppingOrder/update', data
    ).then(function (response) {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
}


//////////////  获取居民信息

export async function GetTenantInfo(t_id) {
    let data = {t_id: t_id};
    let result = await instance.get('/request/tenant/selectTenantInfo', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}



////////////// 获取订单状态

export async function GetOrderState(id) {
    let data = {id: id};
    console.log("get order state");
    let result = await instance.get('/request/shoppingOrder/getState', {
        params: data
    }).then(function (response) {
        console.log("success222");
        console.log('response'+ response.data.message[0].stat);
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

//////////////  获取商家信息

export async function GetMerchantInfo(m_id) {
    let data = {m_id: m_id};
    let result = await instance.get('/request/merchant/selectMerchantInfo', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}


