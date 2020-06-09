var mysql = require('mysql');
var experss = require('express');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var distributor = require('./DatabaseIdDistributor');
var now = new Date();

var orderDistributor=new distributor.OrderIdDistributor();
var volunteerDistributor= new distributor.VolunteerIdDistributor();
// console.log(orderDistributor.getOrderID());

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

//============test===============================
app.post('/request/test/insert', function insert(req, res) {
    var insertSQL = "INSERT INTO shoppingorder " +
        "values('04','清真食堂','tester','牛肉拉面','12:15:00','10:00:00','10','01','arrived','xxx'),('05','清真食堂','tester','牛肉炒饭','18:00:00','16:32:45','6','01','preparing','xxx')";
    
    connection.query(insertSQL, function (err, result) {
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
});
app.get('/request/test/list', function list(req, res) {
    //var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingorder';
    
    connection.query(selectSQL, function (err, result) {
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


app.get('/request/tenant/describe', function describeTenant(req, res) {
    //var getObj = req.query;
    selectSQL = 'describe tenant';
    
    connection.query(selectSQL, function (err, result) {
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

//=============tenant============================
app.get('/request/tenant/selectid', function selectidTenant(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM tenant WHERE account = ?';
    selectParams = [getObj.id];
    console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            console.log(err.message);
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            // console.log(res);
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
});

app.post('/request/tenant/update', function UpdateTenant(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE tenant SET contact = ?, address = ? " + "WHERE account = ? ";
    let updateParams = [
        getObj.contact,
        getObj.address,
        getObj.userName
    ];
    //console.log(updateParams);
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
});


//==============item==============================
app.post('/request/item/insert', function insertItem(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO item(id, merchant_id, weight, stock, payment, production_date, shelf_life) " +
        "VALUES(?, ?, ?, ?, ?, ?, ?)";
    var nowTime = dateFormat(now, "isoDate");
    var insertParams = [
        getObj.id,
        getObj.merchant_id,
        getObj.weight,
        getObj.stock,
        getObj.payment,
        getObj.production_date,
        getObj.shelf_life
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
});

app.get('/request/item/selectid', function selectidItem(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM item WHERE id = ?';
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

app.get('/request/item/list', function listItem(req, res) {
    selectSQL = 'SELECT * FROM item';
    connection.query(selectSQL, function (err, result) {
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

app.get('/request/item/selectm_id', function selectmidItem(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM item WHERE merchant_id = ?';
    selectParams = [getObj.merchant_id];
    console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            console.log('Select Error');
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            console.log('Select Success');
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
});

app.post('/request/item/updateItem', function UpdateItem(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE item SET weight = ?, stock = ?, payment = ?, production_date = ?" + "WHERE id = ? ";
    let updateParams = [
        getObj.weight,
        getObj.stock,
        getObj.payment,
        getObj.production_date,
        getObj.id
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
});

//=============================merchant==============================
app.post('/request/merchant/insert', function insertMerchant(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO merchantuserinfo(username, password, name, address) " +
        "VALUES(?, ?, ?, ?)";
    var insertParams = [
        getObj.account,
        getObj.password,
        getObj.contact,
        getObj.payment
    ];
    console.log(insertParams)
    //database
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
});

app.post('/request/merchant/updatePassword', function updateMerchantPassword(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE merchantuserinfo SET password = ?" + "WHERE username = ? ";
    let updateParams = [
        getObj.password,
        getObj.account
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
});

app.post('/request/merchant/updateConnection', function updateMerchantPassword(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE merchantuserinfo SET phoneNumber = ?, email = ?" + "WHERE username = ? ";
    let updateParams = [
        getObj.phone,
        getObj.email,
        getObj.account
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
});

app.get('/request/merchant/select', function selectMerchant(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM merchantuserinfo WHERE username = ?';
    selectParams = [getObj.account];
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

app.get('/request/merchant/list', function listMerchant(req, res) {
    //var getObj = req.query;
    selectSQL = 'SELECT * FROM merchantuserinfo';
    connection.query(selectSQL, function (err, result) {
        if (err) {
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            console.log(result);
            res.json({
                result: 'Y',
                message: result
            });
        }
    })
});

//=============================shoppingOrder==============================
app.post('/request/shoppingOrder/insert', function insertOrder(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO shoppingOrder(id, m_id, t_id, item_list, expected_time, order_time, total_price, v_id, stat, payment) " +
        "VALUES(?, ?, ?, ?, date_add(NOW(), interval 2 hour), NOW(), ?, ?, ?, ?)";
    var insertParams = [
        orderDistributor.getOrderID(),
        getObj.m_id,
        getObj.t_id,
        getObj.item_list,
        getObj.total_price,
        volunteerDistributor.getVIDforOrder(),
        "preparing",
        getObj.payment
    ];
    console.log(insertParams);
    connection.query(insertSQL, insertParams, function (err, result) {
        if (err) {
            console.log('Insert Error\n');
            console.log(err.message);
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

app.get('/request/shoppingOrder/selectid', function selectidOrder(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE m_id = ? and (stat = \'preparing\' or stat = \'ready\')';
    selectParams = [getObj.merchant_id];
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
});

app.get('/request/shoppingOrder/selecttid', function selecttidOrder(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE t_id = ? and (stat = \'preparing\' or stat = \'ready\')';
    selectParams = [getObj.t_id];
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

app.get('/request/shoppingOrder/selecttidHistory', (req, res)=>{
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE t_id = ? and stat = \'arrived\'';
    selectParams = [getObj.t_id];
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

app.get('/request/shoppingOrder/selectorderid', (req, res)=>{
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE id = ?';
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
});

app.get('/request/shoppingOrder/selectidhistory', function selectidHistoryOrder(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE m_id = ? and stat = \'done\'';
    selectParams = [getObj.merchant_id];
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


app.get('/request/shoppingOrder/selectmid', function selectmidOrder(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM shoppingOrder WHERE m_id = ?';
    selectParams = [getObj.account];
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

//用来将订单的状态设置为ready，即商家已经准备好了
app.post('/request/shoppingOrder/updateStat', function UpdateStat(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE shoppingOrder SET stat = \'ready\' WHERE id = ? ";
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
            res.json({
                result: 'Y',
                message: 'Success'
            });
        }
    })
});

//==========================志愿者模块的内容==================================

app.get('/request/personaluserinfo/select', function selectUser(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM personaluserinfo WHERE username = ?';
    selectParams = [getObj.username];
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

app.post('/request/personaluserinfo/updateStat', function changeUserStat(req, res) {
    let getObj = req.body;
    let updateSQL = "UPDATE personaluserinfo SET status = ? " + "WHERE username = ? ";
    let updateParams = [
        getObj.status,
        getObj.username
    ];
    console.log(updateParams);
    console.log(updateSQL);
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
});

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
    console.log("server");
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
    // console.log('SSSSSSSSSSSSSSSSSSS\n');
    let getObj = req.body;
    let updateSQL = 'UPDATE shoppingOrder SET stat = \'arrived\' WHERE id = ? ';
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
            // console.log('Update SSSSSSSSSSSSSSSSSSS\n');
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

//////////////////////// 按类别获取商家信息
app.get('/request/merchant/selectMerchantCategory', function getMerchantCategory(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM merchantuserinfo WHERE category = ?';
    selectParams = [getObj.category];
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
})

//////////////////////// 获取居民信息

app.get('/request/tenant/selectTenantInfo', function getTenantInfo(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM tenant WHERE account = ?';
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



var server = app.listen(8002, function () {
    console.log("Server open on ", server.address());
})
