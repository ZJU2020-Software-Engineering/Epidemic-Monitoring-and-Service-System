//连接数据库
var mysql = require('mysql');
const crypto = require('crypto');
var date = require("silly-datetime");
var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var path = require('path');
var connection = mysql.createConnection({
  host: '182.92.243.158',
  user: 'root',
  password: 'cs0000',
  port: '3306',
  database: 'cs'
});

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

connection.connect();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  //这段仅仅为了方便返回json而已
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
    //让options请求快速返回
    res.sendStatus(200);
  } else {
    next();
  }
});
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({
  extended: false
}));
var cidCount = 0;
app.use(bodyParser.json());

app.use('/', indexRouter);

app.post('/request/clock/qrcode/get', (req, res, next) => {
  var today = new Date();
  console.log(date.format(today-24*60*60*1000*7, 'YYYY-MM-DD'));
  var getObj = req.body;
  var sltSql = 'SELECT confirmed,suspected,quarantined,contacted,infected,temperature FROM dailyCheck WHERE username=? AND date=?';
  var sltSqlParams = [
    getObj.username,
    date.format(today, 'YYYY-MM-DD')
  ];
  new Promise((resolve, reject) => {
  connection.query(sltSql, sltSqlParams, function(err, result) {
    if (err) {
      console.log('Select Error ', err.message);
      res.json({
        result: 'E',
        message: err.message
      });
    }
   else
   {
      resolve(JSON.parse(JSON.stringify(result)));
   }
 })}).then((stateresults) => {
    console.log(stateresults.length)
    var rand = Math.round(Math.random());
    if (rand) {
      var delSql = 'DELETE FROM qrsessions WHERE username=?';
      var delSqlParams = [getObj.username];
      connection.query(delSql, delSqlParams, function(err) {
        if (err) {
          console.log('Delete Error ', err.message);
        }
      })
    }
    if(stateresults.length == 0) {
       console.log('Did not report', stateresults);
       res.json({
         result: 'Z'
       });
    }
    else {
      var stt = 3;
      var tsString = today.getTime().toString();
      var ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddres || req.socket.remoteAddress || '';
      var rand = Math.random().toString();
      var hash = crypto.createHash('sha256')
        .update(ip + tsString + rand)
        .digest('hex');
      console.log(ip);
      var addSqlParams = [
        hash,
        getObj.username,
        today.getTime()
      ];
      var addSql = 'INSERT INTO qrsessions(`qcsession`, `username`, `timestamp`) VALUES(?,?,?)';
      connection.query(addSql, addSqlParams, function(err, result) {
        if (err) {
          console.log('Insert Error ', err.message);
        }
      })
      if (stateresults[0].confirmed == "1") stt = 2;
      else if (stateresults[0].suspected == "1" || stateresults[0].quarantined == "1" || stateresults[0].contacted == "1" || stateresults[0].infected == "1" || stateresults[0].temperature >= 37.2) stt = 1;
      else stt = 0;
      res.json({
        result: 'Y',
        message: {
          "qrsession": hash,
          "state": stt
        }
      });
    }
  })

});

app.post('/request/clock/qrcode/scan', async (req, res, next) => {
    console.log("11111111");
  var today = new Date();
  var getObj = req.body;
  var sltSql = 'SELECT username, timestamp FROM qrsessions WHERE qcsession=?';
  var sltSqlParams = [
    getObj.qrsession
  ];
  var qrcsessionresults = {}
  new Promise((resolve, reject) => {
    connection.query(sltSql, sltSqlParams, function(err, result) {
      if (err) {
        console.log('Select Error ', err.message);
        res.json({
          result: 'E'
        });
      } else {
        resolve(JSON.parse(JSON.stringify(result)));
      }
    })}).then((codeResults) => {
      if (codeResults.length == 0) {
        res.json({
          result: 'none'
        });
      } else {
        var delSql = 'DELETE FROM qrsessions WHERE username=?';
        var delSqlParams = [codeResults[0].username];
        connection.query(delSql, delSqlParams, function(err) {
          if (err) console.log('Delete Error ', err.message);
        })
        //超时
        if (today.getTime() - codeResults[0].timestamp > 300000) {
          res.json({
            result: 'timeout'
          });
        } else {
          var sltSql2 = 'SELECT date,temperature,alimentarycannal,chestdistress,cough FROM dailycheck WHERE username=? AND date>? AND date<=? ORDER BY date'
          var sltSqlParams2 = [
              codeResults[0].username,
              date.format(today-24*60*60*1000*7, 'YYYY-MM-DD'),
              date.format(today+24*60*60*1000*1, 'YYYY-MM-DD')
          ];
          console.log(sltSqlParams2);
          new Promise((resolve, reject) =>{
            connection.query(sltSql2, sltSqlParams2, function(err, result) {
              if (err) console.log('Select Error ', err.message);
              else {console.log(result); resolve(JSON.parse(JSON.stringify(result)));}
            })
          }).then((data) => {
            console.log(data);
            res.json({
              result: 'Y',
              message: {
                'datas': data,
              }
            });
          })
        }
      }
    })
});

//插入打卡信息
app.post("/request/clockIn", function insertClockIn(req, res) {
    var getObj = req.body;
    console.log(req.body);
    var insertSQL = 'INSERT INTO dailycheck(username,name,date,temperature,suspected,confirmed,quarantined,quarantineStartDate,contacted,infected,alimentarycannal,chestdistress,cough) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var insertParams = [
        //除说明外其他均为整形
        getObj.username,//整形？
        getObj.name,//字符串类型
        getObj.date.substring(0,10),
        getObj.temperature,
        getObj.suspected,
        getObj.confirmed,
        getObj.quarantined,
        getObj.quarantineDate,
        getObj.contacted,
        getObj.infected,
        getObj.alimentarycannal,
        getObj.chestdistress,
        getObj.cough
    ];
    //database
    connection.query(insertSQL, insertParams, function (err, result) {
        if (err) {
            console.log('Insert Error\n');
        }
        else {
            console.log('Insert Success\n');
        }
    })
})

var server = app.listen(8004, '0.0.0.0', () => {

  var host = server.address().address;
  var port = server.address().port;


})

module.exports = app;
