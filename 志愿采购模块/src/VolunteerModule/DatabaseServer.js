var mysql = require('mysql');
var experss = require('express');
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

var app = experss();
connection.connect();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());



//////////////////  活动报名 修改人数

app.post('/request/volunteerActivity/updateState', function updateActivityState(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE volunteerActivity SET  remain_recruit = remain_recruit - 1 WHERE id = ? ";
    let updateParams = [
       
        getObj.va_id
    ];
    console.log(updateParams);
    //database
    connection.query(updateSQL, updateParams, function (err, result) {
        if (err) {
            console.log('Update Error\n');
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: 'Success'
            });
        }
    })
})

///////////////////  活动报名 显示所有可报名列表信息
app.get('/request/volunteerActivity/select', function selectActivity(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM volunteerActivity WHERE remain_recruit > -100';
    selectParams = ["sss"];
    console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
            console.log("wrong!");
        } else {
            res.json({
                result: 'Y',
                message: result
            });
            console.log("right!")
        }
    })
})

////////////////////////  活动报名 更新个人报名活动列表
app.post('/request/volunteerTaken/insert', function insertActivityPerson(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO volunteerTaken(v_id, va_id,service_time) " +
        "VALUES(?,?,?)";
    var insertParams = [
        getObj.v_id,
        getObj.va_id,
        getObj.time,
       
        
        
    ];
    console.log(insertParams);
    connection.query(insertSQL, insertParams, function (err, result) {
        if (err) {
            console.log('Insert Error\n');
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: 'Success'
            });
        }
    })
})

//////////////////////// 显示已经报名的志愿服务列表

app.get('/request/volunteerTaken/select', function GetActivityPerson(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM volunteerTaken WHERE v_id = ?';
    selectParams = [getObj.v_id];
    console.log(selectParams)
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
})

//////////////////////// 检查某人是否已经报名某项活动

app.get('/request/volunteerTaken/check', function checkActivityPerson(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM volunteerTaken WHERE v_id = ? and va_id =?';
    selectParams = [getObj.v_id,getObj.va_id];
    console.log(selectParams)
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
})

//////////////////////// 检查某人是否已经报名某项活动

app.get('/request/volunteerActivity/detailinfo', function getActivityDetailInfo(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM volunteerActivity WHERE id = ?';
    selectParams = [getObj.id];
    console.log(selectParams)
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
})

//////////////////////  获取待配送订单列表

app.get('/request/shoppingOrder/getState', function getOrderState(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE id = ?';
    selectParams = [getObj.id];
    console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
});



//////////////////////  获取待配送订单列表

app.get('/request/shoppingOrder/selectToSendOrder', function selectToSendOrder(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE v_id = ?';
    selectParams = [getObj.v_id];
    console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
});

////////////////////  更新订单状态为已送达

app.post('/request/shoppingOrder/update', function UpdateStat(req, res) {
    console.log('SSSSSSSSSSSSSSSSSSS\n');
    let getObj = req.body;
    let updateSQL = 'UPDATE shoppingOrder SET stat = \'gsjd\' WHERE id = ? ';
    let updateParams = [
        getObj.id,
    ];
    //database
    connection.query(updateSQL, updateParams, function (err, result) {
        if (err) {
            console.log('Update Error\n');
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            console.log('Update SSSSSSSSSSSSSSSSSSS\n');
            res.json({
                result: 'Y',
                message: 'Success'
            });
        }
    })
});

//////////////////////// 获取商家信息

app.get('/request/merchant/selectMerchantInfo', function getMerchantInfo(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM merchant WHERE account = ?';
    selectParams = [getObj.m_id];
    console.log(selectParams)
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
})

//////////////////////// 获取居民信息

app.get('/request/tenant/selectTenantInfo', function getTenantInfo(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM tenant WHERE id = ?';
    selectParams = [getObj.t_id];
    console.log(selectParams)
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
})

app.post('/request/sqlall', function sqlall(req, res) {
    sql = req.body.sql;
    console.log(sql);
    connection.query(sql, function (err, result) {
            if (err) {
                res.json({ result: 'N', message : err.message });
            }
            else {
                res.json(
                    {
                        result: 'Y', message: result
                    });
            }
        })
})



var server = app.listen(4000, function () {

    console.log("Server open on ", server.address());
})
