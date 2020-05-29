//连接数据库
var time = require('./tools/time');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({
    host: '182.92.243.158',
    user: 'root',
    password: 'cs0000',
    port: '3306',
    database: 'cs',
	charset: 'utf8'
}); 
var app = express();

connection.connect();
app.all('*', function (req, res, next) {
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//插入国内数据
app.post('/request/map/chinaMap/insert', function insertChina(req, res)
{
    var getObj = req.body;
    if (getObj.Return=="newAddtion") {//插入到第一张表
        var Sql = 'INSERT INTO chinaMapNewAddtion(date,province,city,confirmedNumber,deathToll,cureNumber,suspectedNumber) VALUES(?,?,?,?,?,?,?)';
        var Params =[getObj.Data,
            getObj.Province,
            getObj.City,
            getObj.increaseDiagnosis,
            getObj.increaseDeath,
            getObj.increaseCure,
            getObj.increaseSuspected];
        //sqlReturn('insert');        
    }
    else if (getObj.Return=="total") {//插入到第二张表
        var Sql = 'INSERT INTO chinaMapGrandTotal(date,province,city,confirmedNumber,deathToll,cureNumber,suspectedNumber) VALUES(?,?,?,?,?,?,?)';
        var Params = [getObj.Data,
            getObj.Province,
            getObj.City,
            getObj.totalDiagnosis,
            getObj.totalDeath,
            getObj.totalCure,
            getObj.totalSuspected];
    }
    else if (getObj.Return=='extance') {//插入到第三张表
        var Sql = 'INSERT INTO chinaMapExisting(date,province,city,confirmedNumber,suspectedNumber) VALUES(?,?,?,?,?)';
        var Params = [getObj.Data,
            getObj.Province,
            getObj.City,
            getObj.extanceDiagnosis,
            getObj.extanceSuspected];
    }
	//console.log(Sql);
	//console.log(Params);
    connection.query(Sql, Params, function (err, result) {
        if (err) {
            console.log('Insert Error ', err.message);
            res.json(
                {
                    result: 'N', message: err.message
                });
            return;
        }
        else {
            console.log('Insert Success');
            res.json(
                {
                    result: 'Y', message: 'Insert Success'
                });
            return;
        }
    })
    
})

//插入国外数据
app.post('/request/map/foreignMap/insert', function insertForeign(req, res)
{
    var getObj = req.body;
    if (getObj.Return=="newAddtion") {
        var Sql = 'INSERT INTO foreignMapNewAddtion(date,country,confirmedNumber,deathToll,cureNumber,suspectedNumber) VALUES(?,?,?,?,?,?)';
        var Params = [getObj.Data,
            getObj.Country,
            getObj.increaseDiagnosis,
            getObj.increaseDeath,
            getObj.increaseCure,
            getObj.increaseSuspected];
        //sqlReturn('insert');
    }
    else if (getObj.Return=="total") {
        var Sql = 'INSERT INTO foreignMapGrandTotal(date,country,confirmedNumber,deathToll,cureNumber,suspectedNumber) VALUES(?,?,?,?,?,?)';
        var Params = [getObj.Data,
            getObj.Country,
            getObj.totalDiagnosis,
            getObj.totalDeath,
            getObj.totalCure,
            getObj.totalSuspected];
        //sqlReturn('insert');
    }
    else if (getObj.Return=='extance') {
        var Sql = 'INSERT INTO foreignMapExisting(date,country,confirmedNumber,suspectedNumber) VALUES(?,?,?,?)';
        var Params = [getObj.Data,
            getObj.Country,
            getObj.extanceDiagnosis,
            getObj.extanceSuspected];
        //sqlReturn('insert');    
    }    
	connection.query(Sql, Params, function (err, result) {
	    if (err) {
	        console.log('Insert Error ', err.message);
	        res.json(
	            {
	                result: 'N', message: err.message
	            });
	        return;
	    }
	    else {
	        console.log('Insert Success');
	        res.json(
	            {
	                result: 'Y', message: 'Insert Success'
	            });
	        return;
	    }
	})
})

//插入年龄数据
app.post('/request/map/Age/insert', function insertAge(req, res) {
    var getObj = req.body;
	console.log(getObj);
    addSql = 'INSERT INTO mapAgeDistribution(ageRange,cureNumber,deathToll) VALUES(?,?,?)';
    addSqlParams = [getObj.Age,
        getObj.totalCure,
        getObj.totalDeath];
    //sqlReturn('insert');
    connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
                console.log('Insert Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log('Insert Success');
                res.json(
                    {
                        result: 'Y', message: 'Insert Success'
                    });
                return;
            }
        })
    
})

//插入性别数据
app.post('/request/map/Gender/insert', function insertGender(req, res) {
    var getObj = req.body;
    addSql = 'INSERT INTO mapMaleToFemaleRatio(cureRatio,deathRatio,confirmedRatio) VALUES(?,?,?)';
    addSqlParams = [getObj.ratioCure,
        getObj.ratioDeath,
		getObj.ratioConfirmed];
    //sqlReturn('insert');
    connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
                console.log('Insert Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log('Insert Success');
                res.json(
                    {
                        result: 'Y', message: 'Insert Success'
                    });
                return;
            }
        })
   
})

//更新国内数据
app.post('/request/map/chinaMap/update', function updateChina(req, res) {
    var getObj = req.body;
    if (getObj.Return=="newAddtion") {
        var updSql = 'UPDATE chinaMapNewAddtion SET confirmedNumber = ?,deathToll = ?,cureNumber = ?,suspectedNumber = ? WHERE date = ? and province = ? and city = ?';
        var updSqlParams = [getObj.increaseDiagnosis,
            getObj.increaseDeath,
            getObj.increaseCure,
            getObj.increaseSuspected,
            getObj.Data,
            getObj.Province,
            getObj.City];
        //sqlReturn('update');
    }
    else if (getObj.Return=="total") {
        var updSql = 'UPDATE chinaMapGrandTotal SET confirmedNumber = ?,deathToll = ?,cureNumber = ?,suspectedNumber = ? WHERE date = ? and province = ? and city = ?';
        var updSqlParams = [getObj.totalDiagnosis,
            getObj.totalDeath,
            getObj.totalCure,
            getObj.totalSuspected,
            getObj.Data,
            getObj.Province,
            getObj.City];
       //sqlReturn('update');
    }
    else if (getObj.Return=='extance') {
        var updSql = 'UPDATE chinaMapExisting SET confirmedNumber = ?,suspectedNumber = ? WHERE date = ? and province = ? and city = ?';
        var updSqlParams = [getObj.extanceDiagnosis,
            getObj.extanceSuspected,
            getObj.Data,
            getObj.Province,
            getObj.City];
        //sqlReturn('update');       
    }
	connection.query(updSql, updSqlParams, function (err, result) {
	    if (err) {
	        console.log('Update Error ', err.message);
	        res.json(
	            {
	                result: 'N', message: err.message
	            });
	        return;
	    }
	    else {
	        console.log('Update Success');
	        res.json(
	            {
	                result: 'Y', message: 'Update Success'
	            });
	        return;
	    }
	})
    
})

//更新国外数据
app.post('/request/map/foreignMap/update', function updateForeign(req, res) {
    var getObj = req.body;
    if (getObj.Return=="newAddtion") {
        var updSql = 'UPDATE foreignMapNewAddtion SET confirmedNumber = ?,deathToll = ?,cureNumber = ?,suspectedNumber = ? WHERE date = ? and country = ?';
        var updSqlParams = [getObj.increaseDiagnosis,
            getObj.increaseDeath,
            getObj.increaseCure,
            getObj.increaseSuspected,
            getObj.Data,
            getObj.Country];
        //sqlReturn('update');
    }
    else if (getObj.Return=="total") {
        var updSql = 'UPDATE foreignMapGrandTotal SET confirmedNumber = ?,deathToll = ?,cureNumber = ?,suspectedNumber = ? WHERE date = ? and country = ?';
        var updSqlParams = [getObj.totalDiagnosis,
            getObj.totalDeath,
            getObj.totalCure,
            getObj.totalSuspected,
            getObj.Data,
            getObj.Country];
    }
    else if (getObj.Return=='extance') {
        var updSql = 'UPDATE foreignMapExisting SET confirmedNumber = ?,suspectedNumber = ? WHERE date = ? and country = ?';
        var updSqlParams = [getObj.extanceDiagnosis,
            getObj.extanceSuspected,
            getObj.Data,
            getObj.Country];
        //sqlReturn('update');        
    }
    connection.query(updSql, updSqlParams, function (err, result) {
        if (err) {
            console.log('Update Error ', err.message);
            res.json(
                {
                    result: 'N', message: err.message
                });
            return;
        }
        else {
            console.log('Update Success');
            res.json(
                {
                    result: 'Y', message: 'Update Success'
                });
            return;
        }
    }) 
})

//更新年龄数据
app.post('/request/map/Age/update', function updateAge(req, res) {
    var getObj = req.body;
    var updSql = 'UPDATE mapAgeDistribution SET cureNumber = ?,deathToll = ? WHERE ageRange = ?';
    var updSqlParams = [getObj.totalCure,
        getObj.totalDeath,
        getObj.Age];
    //sqlReturn('update');
     connection.query(updSql, updSqlParams, function (err, result) {
            if (err) {
                console.log('Update Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log('Update Success');
                res.json(
                    {
                        result: 'Y', message: 'Update Success'
                    });
                return;
            }
        })
})

//更新性别数据
app.post('/request/map/Gender/update', function updateGender(req, res) {
    var getObj = req.body;
    var updSql = 'UPDATE mapMaleToFemaleRatio SET cureRatio = ? and deathRatio = ? and confirmedRatio=?';
    var updSqlParams = [getObj.ratioCure,
        getObj.ratioDeath,
		getObj.ratioConfirmed];
   // sqlReturn('update');
    connection.query(updSql, updSqlParams, function (err, result) {
            if (err) {
                console.log('Update Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log('Update Success');
                res.json(
                    {
                        result: 'Y', message: 'Update Success'
                    });
                return;
            }
        })
})

//查询国内数据
app.post('/request/map/chinaMap/select', function selectChina(req, res) {
    var getObj = req.body;
    //console.log(getObj.Data,getObj.City,getObj.Return)
    switch( getObj.Return ){
        case "sum":
            var sltSql = ['SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll,  SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city',
            'SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll,  SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city',
            'SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city'];
            var sltSqlParams = [getObj.Data];
            console.log(sltSqlParams);
            break;
        case "province":
            var sltSql = ['SELECT province, confirmedNumber, deathToll,  cureNumber, suspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city',
            'SELECT province,  confirmedNumber, deathToll,  cureNumber, suspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city',
            'SELECT province, confirmedNumber, suspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city'];
            var sltSqlParams = [getObj.Data];
            break;
        case "city":
            var sltSql = ['SELECT province, city, confirmedNumber, deathToll,  cureNumber, suspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city',
            'SELECT province, city, confirmedNumber, deathToll, cureNumber, suspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city',
            'SELECT province, city, confirmedNumber, suspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city'];
            var sltSqlParams = [getObj.Data,getObj.Province];
            break;
        case "compare":
            var sltSql = ['SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber,  today.deathToll - yesterday.deathToll AS deathToll,  today.cureNumber - yesterday.cureNumber AS cureNumber,  today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) yesterday','SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber,  today.deathToll - yesterday.deathToll AS deathToll,  today.cureNumber - yesterday.cureNumber AS cureNumber,  today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapGrandTotal  WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) yesterday','SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber, today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) yesterday'];
            var curDate = new Date();
            var today = time.formatDate(curDate, 'yyyy-MM-dd');
            var yesterday = time.formatDate(new Date(curDate.getTime()-24*60*60*1000), 'yyyy-MM-dd');
            var sltSqlParams = [today,yesterday];
            break;
        case "joinCity":
            var sltSql = 'SELECT * FROM (SELECT city, confirmedNumber AS newAddtionConfirmedNumber, deathToll AS newAddtionDeathToll, cureNumber AS newAddtionCureNumber, suspectedNumber AS newAddtionSuspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city ) as a natural join (SELECT city, confirmedNumber AS grandTotalConfirmedNumber, deathToll AS grandTotalDeathToll, cureNumber AS grandTotalCureNumber, suspectedNumber AS grandTotalSuspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city) as b  natural join (SELECT city, confirmedNumber AS existingConfirmedNumber, suspectedNumber AS existingSuspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = ? and province != city) as c';
            var sltSqlParams = [getObj.Data,getObj.Province,getObj.Data,getObj.Province,getObj.Data,getObj.Province];
            break;
        case "joinProvince":
            var sltSql = 'SELECT * FROM (SELECT province, confirmedNumber AS newAddtionConfirmedNumber, deathToll AS newAddtionDeathToll, cureNumber AS newAddtionCureNumber, suspectedNumber AS newAddtionSuspectedNumber FROM chinaMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) as a natural join (SELECT province, confirmedNumber AS grandTotalConfirmedNumber, deathToll AS grandTotalDeathToll, cureNumber AS grandTotalCureNumber, suspectedNumber AS grandTotalSuspectedNumber FROM chinaMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) as b  natural join (SELECT province, confirmedNumber AS existingConfirmedNumber, suspectedNumber AS existingSuspectedNumber FROM chinaMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and province = city) as c';
            var sltSqlParams = [getObj.Data,getObj.Data,getObj.Data];
            break;
		case "singleCity":
		   var sltSql = [
			   'SELECT city, confirmedNumber, deathToll, cureNumber, suspectedNumber FROM chinaMapNewAddtion WHERE date = ? and city = ?',
               'SELECT confirmedNumber, deathToll, cureNumber, suspectedNumber FROM chinaMapGrandTotal WHERE date = ? and city = ? ',
               'SELECT confirmedNumber, suspectedNumber FROM chinaMapExisting WHERE date = ? and city = ?'
           ]
		   var sltSqlParams = [getObj.Data,getObj.City];
		   break;
    }
    message = [];
    if( getObj.Return != "joinCity" && getObj.Return != "joinProvince"){
        for( i = 0 ; i < 3 ; i ++ ){
            connection.query(sltSql[i], sltSqlParams, function (err,result) {
                console.log(result);
                if (err) {
                    console.log('Select Error ', err.message);
                    connection.end();
                    return res.json(
                        {
                            result: 'N', message: err.message
                        });
                }
                else {
                    if( getObj.Return == 'sum' || getObj.Return == 'compare'|| getObj.Return =="singleCity") message.push(result[0]);
                    else message.push(result);
                }
            })
        }
        setTimeout(()=>{
            return res.json({
                result: 'Y', 
                message:{
                    newAddtion:message[0],
                    total:message[1],
                    extance:message[2]
                }
            });
        },300)
    }
    else{
        connection.query(sltSql, sltSqlParams, function (err,result) {
            console.log(result);
            if (err) {
                console.log('Select Error ', err.message);
                connection.end();
                return res.json(
                    {
                        result: 'N', message: err.message
                    });
            }
            else{
                return res.json({
                    result: 'Y', 
                    message: result
            })
            }
        })
    }
})

//查询国外数据
app.post('/request/map/foreignMap/select', function selectForeign(req,res){
    var getObj = req.body;
    switch( getObj.Return ){
        case "sum":
            var sltSql = ['SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll,  SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?',
            'SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll,  SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?',
            'SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?'];
            var sltSqlParams = [getObj.Data];
            console.log(sltSqlParams);
            break;
        case "country":
            var sltSql = ['SELECT country, confirmedNumber, deathToll,  cureNumber, suspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? ',
            'SELECT country, confirmedNumber, deathToll, cureNumber, suspectedNumber FROM foreignMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?',
            'SELECT country, confirmedNumber, suspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?'];
            var sltSqlParams = [getObj.Data];
            break;
		case "singleCountry":
		    var sltSql = ['SELECT country, confirmedNumber, deathToll,  cureNumber, suspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and country= ?',
		    'SELECT country, confirmedNumber, deathToll, cureNumber, suspectedNumber FROM foreignMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and country= ?',
		    'SELECT country, confirmedNumber, suspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ? and country= ?'];
		    var sltSqlParams = [getObj.Data,getObj.Country];
		    break;
        case "compare":
            var sltSql = ['SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber,  today.deathToll - yesterday.deathToll AS deathToll,  today.cureNumber - yesterday.cureNumber AS cureNumber,  today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) yesterday','SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber,  today.deathToll - yesterday.deathToll AS deathToll,  today.cureNumber - yesterday.cureNumber AS cureNumber,  today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapGrandTotal  WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(deathToll) AS deathToll, SUM(cureNumber) AS cureNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) yesterday','SELECT  today.confirmedNumber - yesterday.confirmedNumber AS confirmedNumber, today.suspectedNumber - yesterday.suspectedNumber AS suspectedNumber FROM (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) today, (SELECT SUM(confirmedNumber) AS confirmedNumber, SUM(suspectedNumber) AS suspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) yesterday'];
            var curDate = new Date();
            var today = time.formatDate(curDate, 'yyyy-MM-dd');
            var yesterday = time.formatDate(new Date(curDate.getTime()-24*60*60*1000), 'yyyy-MM-dd');
            var sltSqlParams = [today,yesterday];
            break;
        case "joinCountry":
            var sltSql = 'SELECT * FROM (SELECT country, confirmedNumber AS newAddtionConfirmedNumber, deathToll AS newAddtionDeathToll, cureNumber AS newAddtionCureNumber, suspectedNumber AS newAddtionSuspectedNumber FROM foreignMapNewAddtion WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) as a natural join (SELECT country, confirmedNumber AS grandTotalConfirmedNumber, deathToll AS grandTotalDeathToll, cureNumber AS grandTotalCureNumber, suspectedNumber AS grandTotalSuspectedNumber FROM foreignMapGrandTotal WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) as b  natural join (SELECT country, confirmedNumber AS existingConfirmedNumber, suspectedNumber AS existingSuspectedNumber FROM foreignMapExisting WHERE DATE_FORMAT(date,"%Y-%m-%d") = ?) as c';
            var sltSqlParams = [getObj.Data,getObj.Data,getObj.Data];
            break;
        case "topTen":
            var sltSql = 'Select country, confirmedNumber from foreignMapNewAddtion where DATE_FORMAT(date,"%Y-%m-%d") = ? order by -confirmedNumber limit 10';
            var sltSqlParams = [getObj.Data];
			break;
		case "topSeries":
		    var sltSql = 'Select date, country, confirmedNumber from foreignMapNewAddtion where country= ? or country= ? or country=? or country=? or country=? order by date';
		    var sltSqlParams = getObj.Countries;
    }
    message = [];
    if( getObj.Return != "joinCountry" && getObj.Return != "topTen"&& getObj.Return != "topSeries" ){
        for( i = 0 ; i < 3 ; i ++ ){
            connection.query(sltSql[i], sltSqlParams, function (err,result) {
                console.log(result);
                if (err) {
                    console.log('Select Error ', err.message);
                    connection.end();
                    return res.json(
                        {
                            result: 'N', message: err.message
                        });
                }
                else {
                    if( getObj.Return == 'sum' || getObj.Return == 'compare'|| getObj.Return == "singleCountry")message.push(result[0]);
                    else message.push(result);
                }
            })
        }
        setTimeout(()=>{
            return res.json({
                result: 'Y', 
                message:{
                    newAddtion:message[0],
                    total:message[1],
                    extance:message[2]
                }
            });
        },500)
    }
    else{
        connection.query(sltSql, sltSqlParams, function (err,result) {
            console.log(result);
            if (err) {
                console.log('Select Error ', err.message);
                connection.end();
                return res.json(
                    {
                        result: 'N', message: err.message
                    });
            }
            else{
                return res.json({
                    result: 'Y', 
                    message: result
            })
            }
        })
    }
})

//查询年龄数据
app.post('/request/map/Age/select', function selectAge(req, res) {
    var getObj = req.body;
    var sltSql = 'SELECT * FROM mapAgeDistribution';
    //sqlReturn('getall');
      connection.query(sltSql, function (err, result) {
            if (err) {
                console.log('Select Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log(result);
                if (result){
                	res.json(
                	    {
                	        result: 'Y', message: result
                	    });
                	return;
                }else{
                	res.json(
                	    {
                	        result: 'N', message: 'empty'
                	    });
                	return;
                }
            }
        })
})

//查询性别数据
app.post('/request/map/Gender/select', function selectGender(req, res) {
    var getObj = req.body;
    var sltSql = 'SELECT * FROM mapMaleToFemaleRatio';
    //sqlReturn('getall');
      connection.query(sltSql, function (err, result) {
            if (err) {
                console.log('Select Error ', err.message);
                res.json(
                    {
                        result: 'N', message: err.message
                    });
                return;
            }
            else {
                console.log(result);
				if (result){
                	res.json(
                	    {
                	        result: 'Y', message: result
                	    });
                	return;
                }else{
                	res.json(
                	    {
                	        result: 'N', message: 'empty'
                	    });
                	return;
                }
            }
        })
})

var server = app.listen(8081,function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);

})

//connection.end();
