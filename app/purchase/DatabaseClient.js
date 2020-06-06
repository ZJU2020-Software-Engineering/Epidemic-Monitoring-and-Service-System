const URL = 'http://10.181.163.236:4000';

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



export async function GetTenantInfo(id) {
    let data = {id: id};
    let result = await instance.get('/request/tenant/selectid', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}


//============new================
//确保数据先从服务器读取得到再构造状态里的参数
export async function GetIteminfo(name){
    let result= await instance.get('/request/item/selectid',{params:{id:name}}).then(
        function (response){
            return response.data.message;
        }
    ).catch(function(error){
        console.log(error);
    });
    return result;
}

export async function GetItems(merchant){
    let result= await instance.get('/request/item/selectm_id',{params:{merchant_id:merchant}}).then(
        function (response){
            return response.data.message;
        }
    ).catch(function(error){
        console.log(error);
    });
    return result;
}


export async function GetMerchants(location){
    let result= await instance.get('/request/merchant/list').then(
        function (response){
            return response.data.message;
        }
    ).catch(function(error){
        console.log(error);
    });
    return result;
}

export async function GetMerchantCategory(category) {
    let data = {category: category};
    let result = await instance.get('/request/merchant/selectMerchantCategory', {
        params: data
    }).then(function (response) {
        return response.data.message;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}

export async function UpdateTenant(tenant){
    let result= await instance.post('/request/tenant/update',tenant).then(
        (response)=>{
            return response.data.result;
        }
    );
    return result;
}

//===============================志愿者模块的内容=========================

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


//////////////  获取居民信息 ====上面有个同样功能的同名函数，我把这个注释掉了

// export async function GetTenantInfo(t_id) {
//     let data = {t_id: t_id};
//     let result = await instance.get('/request/tenant/selectTenantInfo', {
//         params: data
//     }).then(function (response) {
//         return response.data.message;
//     }).catch(function (error) {
//         console.log(error);
//     });
//     return result;
// }



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


export async function InsertOrder(orderinfo){
    let result = await instance.post(
        '/request/shoppingOrder/insert',orderinfo
    ).then(
        function(response){
            return response.data.result;
        }
    ).catch(function (error) {
        console.log(error);
    });
    return result;
}
