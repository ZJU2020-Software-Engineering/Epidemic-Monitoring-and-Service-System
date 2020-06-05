let { login, mailCreate, mailList, mailDetail, searchData, getData ,mySearchData } = require('./utls')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// ================ Set Route ================ //
app.get('/forum', (req, res) => {
    res.send('This is forum');
})

//login
app.post('/forum/login', (req, res) => {
    console.log("login");
    console.log(req.body);
    var username = req.body.username
    var password = req.body.password
    var promise = login(username)
    promise.then((value) => {
        console.log(value)
        let new_password = value[0].password;
        let userID = value[0].id;
        if (new_password == password) {
            console.log('password correct')
            res.send({
                state: "success",
                userID: userID
            })
        }
        else {
            console.log('password wrong')
            res.send({
                state: "failure",
                userID: 0
            })
        }
    }, (error) => {
        console.log('login error')
        res.send({
            state: "failure",
            userID: 0
        })
    })
})

//mail
app.post('/forum/mail/create', (req, res) => {
    console.log("mail create");
    var userID = req.body.userID
    var username = req.body.username
    var receiver = req.body.receiver
    var content = req.body.content
    var promise = mailCreate(userID, username, receiver, content)
    promise.then((value) => {
        res.send({
            state: "success",
        })
    }, (error) => {
        console.log(error)
        res.send({
            state: "failure",
        })
    })
})

app.post('/forum/mail', (req, res) => {
    console.log('mail');
    var userID = req.body.userID
    var promise = mailList(userID)
    promise.then((value) => {
        console.log(value)
        res.send({
            state: 'success',
            mails: value
        })
    }, (error) => {
        res.send({
            state: 'failure'
        })
    })

})

app.post('/forum/mail/detail', (req, res) => {
    console.log('mail detail');
    var mailID = req.body.mailID
    var promise = mailDetail(mailID)
    promise.then((value) => {
        res.send({
            state: 'success',
            content: value,
        })
    }, (error) => {
        res.send({
            state: 'failure',
        })
    })
})

//home
app.post('/forum/post/list', async (req, res) => {
    console.log('收到请求')
    console.log(req.body)
    let data = await getData(req.body.num)
    //console.log(data)
    res.send(data)
})

app.post('/forum/search', async (req, res) => {
    console.log('收到搜索请求')
    console.log(req.body)
    console.log('keywords:', req.body.num)
    let data = await mySearchData(req.body.num, req.body.keywords)
    console.log(data)
    res.send(data)
})

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '47.100.237.232',
    user: 'root',
    password: 'root',
    database: 'forum',
    port: 3306
})

connection.connect()

//创建帖子请求
app.post('/forum/post/create', function createPost(req, res) {
    console.log('post create')
    console.log(req.body)
    var getObj = req.body;
    //var postIdArr = [postTime.format('YYYYMMDDHHmmss'), getObj.user_id];
    //var id = postIdArr.join();
    var addSql = 'INSERT INTO post (title,type,user_id,user_name,content) VALUES(?,?,?,?,?)';
    var addSqlParams = [
        getObj.post_title,
        getObj.post_type,
        getObj.user_id,
        getObj.user_name,
        getObj.post_content,
    ];
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('Insert Error ', err.message);
            res.json(
                {
                    state: 'N'
                });
        }
        else {
            console.log('Insert Success');
            res.json(
                {
                    state: 'Y'
                });
        }
    })
})

//删除帖子请求
app.post('/forum/post/delete', function deletePost(req, res) {
    var getObj = req.body;
    var delSql = 'DELETE FROM post WHERE id = ?';
    var delSqlParams = [
        getObj.id,
    ];
    connection.query(delSql, delSqlParams, function (err, result) {
        if (err) {
            console.log('Delete Error ', err.message);
            res.json(
                {
                    state: 'N'
                });
        }
    })
    var delSql2 = 'DELETE FROM reply WHERE post_id = ?';
    connection.query(delSql2, delSqlParams, function (err, result) {
        if (err) {
            console.log('Delete Error ', err.message);
            res.json(
                {
                    state: 'N'
                });
        }
        else {
            console.log('Delete Success');
            res.json(
                {
                    state: 'Y'
                });
        }
    })
})

//创建回复请求
app.post('/forum/reply/create', function createPost(req, res) {
    console.log('reply create')
    var getObj = req.body;
    var state = 'N';
    var sltSql = 'SELECT reply_num FROM post WHERE id =?';
    var sltSqlParams = [
        getObj.post_id
    ];
    console.log(getObj)
    var updSql = 'UPDATE post SET reply_num=reply_num+1 where id =?';
    connection.query(updSql, sltSqlParams, function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
        }
    })
    var addSql = 'INSERT INTO reply(post_id, user_id,user_name,level,reference,reference_id,reference_name,content) VALUES(?,?,?,?,?,?,?,?)';
    var addSqlParams = [
        getObj.post_id,
        getObj.user_id,
        getObj.username,
        getObj.level,
        getObj.reference,
        getObj.reference_id,
        getObj.reference_name,
        getObj.content,
    ];
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('Insert Error ', err.message);

        }
        else {
            console.log('Insert Success');
            res.json(
                {
                    state: 'Y'
                });
        }
    })

})

//删除回复请求
app.post('/forum/reply/delete', function deletePost(req, res) {
    var getObj = req.body;
    var updSql = 'UPDATE post SET reply_num=reply_num-1';
    connection.query(updSql, function (err, result) {
        if (err) {
            res.json(
                {
                    state: 'N'
                });
        }
    })
    var delSql = 'DELETE FROM reply WHERE id = ? ';
    var delSqlParams = [
        getObj.id
    ];
    connection.query(delSql, delSqlParams, function (err, result) {
        if (err) {
            console.log('Delete Error ', err.message);
            res.json(
                {
                    state: 'N'
                });
        }
        else {
            console.log('Delete Success ', err.message);
            res.json(
                {
                    state: 'Y'
                });
        }
    })

})

//帖子详情请求
app.post('/forum/post/detail', function postDetail(req, res) {
    console.log("post detail")
    var getObj = req.body;
    var postDetail = {
        state: 'N',
        post: '',
        replies: ''
    }
    console.log(getObj)
    var sltSql = 'SELECT * FROM post WHERE id =?';
    var sltSqlParams = [
        getObj.post_id
    ];
    connection.query(sltSql, sltSqlParams, function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            //console.log(result)
            postDetail.post = result[0];
        }
    })
    var sltSql2 = 'SELECT * FROM reply WHERE post_id =?';
    connection.query(sltSql2, sltSqlParams, function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            //console.log(result)
            postDetail.state = 'Y';
            postDetail.replies = result;
            //console.log(postDetail)
            res.json(postDetail);
        }
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))