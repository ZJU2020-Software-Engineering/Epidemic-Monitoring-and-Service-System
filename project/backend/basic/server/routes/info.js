var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secretkey = 'secretkey';

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var now = new Date();
var connection = mysql.createConnection({
    host: '182.92.243.158',
    user: 'root',
    password: 'cs0000',
    port: '3306',
    database: 'cs'
}); 

connection.connect();

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'token,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //Õâ¶Î½ö½öÎªÁË·½±ã·µ»Øjson¶øÒÑ
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
  });
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())



//token
// router.use(function(req,res,next){
   
//         //token可能存在post请求和get请求
//         let token =  req.headers.token;
//         console.log(req.headers.token)
//         jwt.verify(token,secretkey,function(err,decode){
//            if(err){
//                res.json({
//                    message: 'token过期，请重新登录',
//                    resultCode: '403',
//                    result:'L'
//                })
//            }else{
//                next();             
//            }
//         })
//         // console.log(token);
//         // next();
    
//   })


//=======================PersonalUserInfo==========================

router.post('/personalUserInfo/update', function updatePersonalUserInfo(req, res) {
    var getObj = req.body;
    var changevalue=getObj.changevalue
    if(getObj.attr=='name')
         updateSQL = 'UPDATE personalUserInfo SET name = ?, updateTime = ? WHERE username = ?';
    else if(getObj.attr=='phonenumber')
         updateSQL = 'UPDATE personalUserInfo SET phonenumber = ?, updateTime = ? WHERE username = ?';
    else if(getObj.attr=='email')
         updateSQL = 'UPDATE personalUserInfo SET email = ?, updateTime = ? WHERE username = ?';
    else if(getObj.attr=='address')
         updateSQL = 'UPDATE personalUserInfo SET address = ?, updateTime = ? WHERE username = ?';
    else if(getObj.attr=='password'){
         updateSQL = 'UPDATE personalUserInfo SET password = ?, updateTime = ? WHERE username = ?';
         const changevalue = bcrypt.hashSync(getObj.changevalue, 5);
    }
    else
        res.json({result: 'UNKNOWN '})

    
    //updateSQL = 'UPDATE personalUserInfo SET name = ?, phoneNumber = ?,address = ?, healthStatus = ?, healthCode = ?, updateTime = ? WHERE username = ?';
   var nowTime = dateFormat(now, "isoDate");
    updateParams = [
        //getObj.status
        //getObj.name,
       // getObj.phonenumber,
        changevalue,
       // getObj.healthstatus,
        //getObj.healthcode,
        nowTime,
        //getObj.password,
        getObj.username
        //getObj.username
    ];
    console.log(getObj.attr);
    connection.query(updateSQL, updateParams, function (err, result) {
            if (err) {
                console.log('Update Error\n');
                res.json({ result: 'N', message : err.message });
                console.log(err.message)
            }
            else {
                //console.log(updateSQL)
                console.log('Update Success\n');
                res.json({ result: 'Y', message : 'Success' });
                console.log(getObj.changevalue)
            }
        })
})

router.post('/personalUserInfo/select', function selectPersonalUserInfo(req, res) {
    var getObj = req.body;

    selectSQL = 'SELECT * FROM personalUserInfo WHERE username = ?';
    selectParams = [getObj.username];
    console.log(getObj.username);
   // SQLReturn('select');
    connection.query(selectSQL, selectParams, function (err, result) {
            if (err) {
                console.log('Select Error\n');
                res.json({ result: 'N', message : err.message });
            }
            else {
                console.log('Select Success\n');
                res.json(
                    {
                        result: 'Y', message: result[0]
                    });
                 //console.log(result[0]);
            }
        })
})
router.post('/personalUserInfo/changePassword', function updatePersonalUserInfo(req, res) {
    var getObj = req.body;
    //var changevalue=getObj.changevalue;

    var selectSQL = 'SELECT *  FROM personalUserInfo WHERE username = ?';
    var selectParams = [getObj.username];
    connection.query(selectSQL, selectParams, function (err, result) {
            if (err) {
                console.log('Select Error\n');
                res.json({ result: 'N', message : err.message });
                return
            }
            else {
                if(bcrypt.compareSync(getObj.oldpassword, result[0].password)){
                    console.log("oldpassword = password")
                }
                else{
                    res.json({ result: 'D', message : "newpassword and confirmednewpassword should be the same!" });
                    return
                }
            }
        })   

   updateSQL = 'UPDATE personalUserInfo SET password = ?, updateTime = ? WHERE username = ?';
   var nowTime = dateFormat(now, "isoDate");
   const hash = bcrypt.hashSync(getObj.newpassword, 5);
    updateParams = [
        //getObj.status
        //getObj.name,
       // getObj.phonenumber,
        //changevalue,
        hash,
       // getObj.healthstatus,
        //getObj.healthcode,
        nowTime,
        //getObj.password,
        getObj.username
        //getObj.username
    ];
    console.log(getObj.attr);
    connection.query(updateSQL, updateParams, function (err, result) {
            if (err) {
                console.log('Update Error\n');
                res.json({ result: 'N', message : err.message });
                console.log(err.message)
            }
            else {
                //console.log(updateSQL)
                console.log('Update Success\n');
                res.json({ result: 'Y', message : 'Success' });
                console.log(getObj.username)
            }
        })
})

router.post('/merchantUserInfo/update', function updateMerchantUserInfo(req, res) {
    var getObj = req.body;
    //var updateSQL = 'UPDATE merchantUserInfo SET password = ?, name = ?, address = ?, businessLicense = ?, corporateIdentity = ?, category = ?, phoneNumber = ?, email = ?, collectionInformation = ?' +
                    //'WHERE username = ?';

    if(getObj.attr=='name')
         updateSQL = 'UPDATE merchantUserInfo SET name = ? WHERE username = ?';
    else if(getObj.attr=='phonenumber')
         updateSQL = 'UPDATE merchantUserInfo SET phonenumber = ? WHERE username = ?';
    else if(getObj.attr=='email')
         updateSQL = 'UPDATE merchantUserInfo SET email = ? WHERE username = ?';
    else if(getObj.attr=='address')
         updateSQL = 'UPDATE merchantUserInfo SET address = ? WHERE username = ?';
    else if(getObj.attr=='password')
         updateSQL = 'UPDATE merchantUserInfo SET password = ? WHERE username = ?'; 
    else if(getObj.attr=='category')
         updateSQL = 'UPDATE merchantUserInfo SET category = ? WHERE username = ?';
    else {
        console.log("UNKNOWN")
    }             

    var updateParams = [
        //getObj.password,
        //getObj.name,
        //getObj.address,
        // getObj.businessLicense,
        // getObj.corporateIdentity,
        // getObj.category,
        // getObj.phoneNumber,
        // getObj.email,
        // getObj.collectionInformation,
        getObj.changevalue,
        getObj.username
    ];
    //SQLReturn('update');
     connection.query(updateSQL, updateParams, function (err, result) {
            if (err) {
                console.log('Update Error\n');
                res.json({ result: 'N', message : err.message });
                console.log(err.message)
            }
            else {
                console.log('Update Success\n');
                console.log(getObj.username);
                console.log( result)
                res.json({ result: 'Y', message : 'Success' });
            }
        })
})


router.post('/merchantUserInfo/select', function selectMerchantUserInfo(req, res) {
    var getObj = req.body;
    var selectSQL = 'SELECT *  FROM merchantUserInfo WHERE username = ?';
    var selectParams = [getObj.username];
    connection.query(selectSQL, selectParams, function (err, result) {
            if (err) {
                console.log('Select Error\n');
                res.json({ result: 'N', message : err.message });
            }
            else {
                console.log('Select Success\n');
                res.json(
                    {
                        result: 'Y', message: result[0]
                    });
                 //console.log(result[0]);
            }
        })
})

router.post('/merchantUserInfo/changePassword', function updatePersonalUserInfo(req, res) {
    var getObj = req.body;
    //var changevalue=getObj.changevalue;

    var selectSQL = 'SELECT *  FROM merchantUserInfo WHERE username = ?';
    var selectParams = [getObj.username];
    connection.query(selectSQL, selectParams, function (err, result) {
            if (err) {
                console.log('Select Error\n');
                res.json({ result: 'N', message : err.message });
                return
            }
            else {
                if(bcrypt.compareSync(getObj.oldpassword, result[0].password)){
                    console.log("oldpassword = password")
                }
                else{
                    res.json({ result: 'D', message : "newpassword and confirmednewpassword should be the same!" });
                    return
                }
            }
        })   

   updateSQL = 'UPDATE merchantUserInfo SET password = ? WHERE username = ?';
   //var nowTime = dateFormat(now, "isoDate");
   const hash = bcrypt.hashSync(getObj.newpassword, 5);
    updateParams = [
        //getObj.status
        //getObj.name,
       // getObj.phonenumber,
        //changevalue,
        hash,
       // getObj.healthstatus,
        //getObj.healthcode,
        //nowTime,
        //getObj.password,
        getObj.username
        //getObj.username
    ];
    console.log(getObj.attr);
    connection.query(updateSQL, updateParams, function (err, result) {
            if (err) {
                console.log('Update Error\n');
                res.json({ result: 'N', message : err.message });
                console.log(err.message)
            }
            else {
                //console.log(updateSQL)
                console.log('Update Success\n');
                res.json({ result: 'Y', message : 'Success' });
                console.log(getObj.username)
            }
        })
})

module.exports = router;
