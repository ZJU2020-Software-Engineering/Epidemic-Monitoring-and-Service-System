// ================ Database Connect ===================== //
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'47.100.237.232',
    user:'root',
    password:'root',
    database:'forum',
    port:3306
})

connection.connect()

async function login(username){
    let sql = "select password,id from user where username=" + "'" + username + "'";
    console.log(sql)
    var promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, rows, fields) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(rows)
            }
        })
    })
    return promise;
}

async function mailCreate(userID, receiver, content){
    let sql = "insert into mail (user_id, receiver, content) values (" + userID + "," + receiver + "," + "'" + content +"'" + ")";
    var promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, rows, fields) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(rows)
            }
        })
    })
    return promise;
}

async function mailList(userID){
    let sql = "select id, user_id, create_date from mail where receiver=" + userID ;
    var promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, rows, fields) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(rows)
            }
        })
    })
    return promise;
}

async function mailDetail(mailID){
    let sql = "select content from mail where id=" + mailID ;
    var promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, rows, fields) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(rows)
            }
        })
    })
    return promise;
}

var preparedData = []
var preparedSearchData = []
var searchPage = -1
var lastKeywords = [];

//查询最新更新（四小时以内）的帖子，取前100
const sqlForGetLatestPost = "select * from post \
where update_date > (unix_timestamp(now())-14400) \
limit 0,100;";

//搜索查询，需要先建立post表中(title,content)的全文索引
//ALTER TABLE post ADD FULLTEXT INDEX ft_index (title,content);
const sqlForSearchPostByKeywords = "select * from post \
where MATCH (title,content) AGAINST (? IN BOOLEAN MODE) \
order by update_date DESC \
limit ?,100;"

async function getData(num){
    console.log(preparedData)
    if(preparedData.length <= num){ //存量不足
        return new Promise((resolve,reject)=>{
            connection.query(sqlForGetLatestPost,(err,rows,fields)=>{
                if(err){
                    console.log("获取帖子数据时发生错误:",err);
                    reject([]);
                }
                preparedData = preparedData.concat(rows);
                let returnData = preparedData.slice(0,num);
                preparedData = preparedData.slice(num);
                console.log("preparedData剩下：",preparedData.length);
                resolve(returnData);
            })
        });
    }
    else{ //存量充足
        let returnData = preparedData.slice(0,num);
        preparedData = preparedData.slice(num);
        console.log("preparedData剩下：",preparedData.length);
        return returnData;
    }
}

async function searchData(num,keyWords){
    if(keyWords.length==1 && keyWords[0]==""){
        return [];
    }
    if(checkSameKeywords(keyWords)){  //关键词相同
        if(preparedSearchData.length <= num){ //存量不足
            searchPage = searchPage + 1;
            let keyString = keyWords.join(' ');
            let pageOffset = searchPage*100;
            return new Promise((resolve,reject)=>{
                connection.query(sqlForSearchPostByKeywords, [keyString, pageOffset],(err,rows,fields)=>{
                    if(err){
                        console.log("补充搜索的时候发生错误：",err);
                        reject([]);
                    }
                    preparedSearchData = preparedSearchData.concat(rows);
                    let returnData = preparedSearchData.slice(0,num);
                    preparedSearchData = preparedSearchData.slice(num);
                    console.log("preparedSearchData剩下：",preparedSearchData.length);
                    resolve(returnData);
                })
            });
        }
        else{
            let returnData = preparedSearchData.slice(0,num);
            preparedSearchData = preparedSearchData.slice(num);
            console.log("preparedSearchData剩下：",preparedSearchData.length);
            return returnData;
        }
    }
    else{ //关键词不同，取新的结果
        searchPage = 0;
        lastKeywords = new Array(keyWords);
        let keyString = keyWords.join(' ');
        let pageOffset = searchPage*100;
        return new Promise((resolve,reject)=>{
            connection.query(sqlForSearchPostByKeywords, [keyString, pageOffset],(err,rows,fields)=>{
                if(err){
                    console.log("重新搜索的时候发生错误：",err);
                    reject([]);
                }
                preparedSearchData = rows;
                let returnData = preparedSearchData.slice(0,num);
                preparedSearchData = preparedSearchData.slice(num);
                console.log("preparedSearchData剩下：",preparedSearchData.length);
                resolve(returnData);
            })
        });
    }
    
}

function checkSameKeywords(keyWords){
    if(keyWords.length != lastKeywords.length){
        return false;
    }
    else{
        for(a in lastKeywords){
            if(!keyWords.includes(a)){
                return false;
            }
        }
        return true;
    }
}

module.exports = {
    login,
    mailCreate,
    mailList,
    mailDetail,
    searchData,
    getData
}