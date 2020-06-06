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

app.get('/request/item/selectm_id', function selectmidItem(req, res) {
    var getObj = req.query;
    selectSQL = 'SELECT * FROM item WHERE merchant_id = ?';
    selectParams = [getObj.account];
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
    let updateSQL = "UPDATE merchantuserinfo SET phoneNumber = ?, email = ?" + " WHERE username = ? ";
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
    // console.log(selectParams);
    connection.query(selectSQL, selectParams, function (err, result) {
        if (err) {
            // console.log('error');
            res.json({
                result: 'N',
                message: err.message
            });
        } else {
            // console.log('success');
            res.json({
                result: 'Y',
                message: result
            });
        }
    });
});
//=============================shoppingOrder==============================
app.post('/request/shoppingOrder/insert', function insertOrder(req, res) {
    var getObj = req.body;
    var insertSQL = "INSERT INTO shoppingOrder(id, m_id, t_id, item_list, total_price, v_id, stat, payment) " +
        "VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    var insertParams = [
        getObj.id,
        getObj.m_id,
        getObj.t_id,
        getObj.item_list,
        getObj.total_price,
        getObj.v_id,
        getObj.stat,
        getObj.payment
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
    selectSQL = 'SELECT * FROM shoppingOrder WHERE t_id = ? and stat = \'done\'';
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

var server = app.listen(4000, function () {
    console.log("Server open on ", server.address());
})

