var http = require('http');
var experss=require('express');
var bodyParser = require('body-parser');
var app = experss();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //Õâ¶Î½ö½öÎªÁË·½±ã·µ»Øjson¶øÒÑ
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //ÈÃoptionsÇëÇó¿ìËÙ·µ»Ø
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}))

function randomString(length, chars='0123456789abcdefghijklmnopqrstuvwxyz') {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var fs = require('fs')
var path = '/opt/tomcat/webapps/ROOT/imgdb'
app.post('/imgdb/upload', function upload(req, res) {
    var getObj = req.body;//req
    var img = getObj.data;
    var tp = getObj.tp;
	var files = fs.readdirSync(path);
	var filename = randomString(12) + tp;
    while (files.indexOf(filename)>=0) {
	    filename = randomString(12) + tp;
    }
    fs.writeFileSync(path+'/'+filename, img, 'binary');
    res.json({result: 'Y', message: 'http://121.199.7.115:8080/imgdb/'+filename})
})

var server = app.listen(9050, function () {
    var host = server.address().address;
    var port = server.address().port;

})

