var axios =  require('axios');
var instance=axios.create({
    baseURL:'http://10.181.177.8:4000',//改成服务器的url
    
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

var data = {
    // sql: 'show tables'
    sql: 'select * from shoppingOrder'
    // sql:'insert into shoppingOrder values(\'03\',\'03\',\'03\',\'aabbcc\',\'23:15\',\'10:00\',78,\'01\',\'ready\',\'xxx\')'

}
instance.post('/request/sqlall', data).then(
    (res)=>{
        console.log(res.data);
    }
).catch(
    (error)=>{
        console.log('Failure');
    }
);