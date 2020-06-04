var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secretkey = 'secretkey';

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
  res.header('Access-Control-Allow-Headers', ',token,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
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

//=======================PersonalUserInfo==========================

router.post('/personalUserInfo/insert', function insertPersonalUserInfo(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO personalUserInfo(status, name, gender, identityCardNumber, phoneNumber, address, healthStatus, healthCode, visitedPlaces, email, paymentInformation, creationTime, updateTime, personalCenterLink, username, password) "
        + "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    var nowTime = dateFormat(now, "isoDate");

    const hash = bcrypt.hashSync(getObj.password, 5);
    var insertParams = [
        '0',
        getObj.name,
        getObj.gender,
        getObj.identityCardNumber,
        getObj.phoneNumber,
        getObj.address,
        getObj.healthStatus,
        getObj.healthCode,
        'getObj.visitedPlaces',
        getObj.email,
        'paymentInformation',
        nowTime,
        nowTime,
        'personalCenterLink',
        getObj.username,
        //getObj.password
        hash
    ];
    console.log(getObj.name);
    
    //database
    connection.query(insertSQL, insertParams, function (err, result) {
            if (err) {
               console.log('Insert Error\n');
              console.log(err);
               res.json({ result: 'N', message : err.message });
            }
            else {
               console.log('Insert Success\n');
               res.json({ result: 'Y', message : 'Success' });
            }
        })
    //SQLReturn('insert');
})


router.post('/personalUserInfo/login', function selectPersonalUserInfo(req, res) {
    var getObj = req.body;

    selectSQL = 'SELECT * FROM personalUserInfo WHERE username = ?';
    selectParams = [getObj.username];
    console.log(getObj.username);

    connection.query(selectSQL, selectParams, function (err, result) {
            if (err) {
                console.log('Select Error\n');
                res.json({ result: 'N', message : err.message });
                return
            }
            else if(result==""){
                res.json({ result: 'No', message : 'This user does not exist.' });
            }
            else {
                if(bcrypt.compareSync(getObj.password, result[0].password)){
                console.log('Select Success\n');
                var token = jwt.sign({username:getObj.username},secretkey,{expiresIn: 60*8});
                    res.json({
                        result: 'Y',
                        token: token
                    })
                }
                 else{
                  res.json(
                    {
                        result: 'W', message: "password is wrong."
                    });
                 } 
            }
        })
})
//////////

router.post('/merchantUserInfo/insert', function insertMerchantUserInfo(req, res) {
    var getObj = req.body;
    var insertSQL = 'INSERT INTO merchantUserInfo(username, password, name, address, businessLicense, corporateIdentity, category, phoneNumber, email, collectionInformation) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const hash = bcrypt.hashSync(getObj.password, 5);
    var insertParams = [
        getObj.username,
        //getObj.password,
        hash,
        getObj.name,
        getObj.address,
        getObj.businessLicense,
        getObj.corporateIdentity,
        getObj.category,
        getObj.phoneNumber,
        getObj.email,
        getObj.collectionInformation
    ];
    console.log(getObj.name);
    connection.query(insertSQL, insertParams, function (err, result) {
            if (err) {
               console.log('Insert Error\n');
              // console.log(err);
               res.json({ result: 'N', message : err.message });
            }
            else {
               console.log('Insert Success\n');
               res.json({ result: 'Y', message : 'Success' });
            }
        })


})


router.post('/merchantUserInfo/login', function selectMerchantUserInfo(req, res) {
    var getObj = req.body;
    var selectSQL = 'SELECT *  FROM merchantUserInfo WHERE username = ?';
    var selectParams = [getObj.username];
    connection.query(selectSQL, selectParams, function (err, result) {
      if (err) {
          console.log('Select Error\n');
          res.json({ result: 'N', message : err.message });
          return
      }
      else if(result==""){
          res.json({ result: 'No', message : 'This user does not exist.' });
      }
      else {
          if(bcrypt.compareSync(getObj.password, result[0].password)){
          console.log('Select Success\n');
          var token = jwt.sign({username:getObj.username},secretkey,{expiresIn: 60*8});
              res.json({
                  result: 'Y',
                  token: token
              })
          }
           else{
            res.json(
              {
                  result: 'W', message: "password is wrong."
              });
           } 
      }
  })



})
module.exports = router;
