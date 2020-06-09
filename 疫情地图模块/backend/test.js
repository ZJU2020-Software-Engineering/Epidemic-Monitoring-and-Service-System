var time = require('./tools/time');
var axios = require('axios')   ;
var curDate = new Date();
//var preDate = new Date(curDate.getTime() - 24*60*60*1000); //前一天
//var nextDate = new Date(curDate.getTime() + 24*60*60*1000); //后一天
// axios
//     .post("http://127.0.0.1:8081/request/map/foreignMap/select",{'Return':'joinCountry','Data':'2020-05-21','Province':'四川'})
//     .then((res)=>{
//         console.log(res.data);
//         console.log(time.formatDate(new Date(), 'yyyy-MM-dd'))
//     })
// a['a']=1
// console.log(a)
// axios
//         .post(`http://192.168.31.78:8081/request/map/foreignMap/select`,{"Return":'topSeries',"Data":'2020-06-05'})
//         .then((res)=>{
//             console.log(res.data.message)
//         })

