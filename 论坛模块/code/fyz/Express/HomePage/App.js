const express = require('express')
const app = express()
const port = 3291

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/forum/post/list', async (req,res)=>{
    console.log('收到请求')
    console.log(req.body)
    let data = await getData(req.body.num)
    console.log(data)
    res.send(data)
})

app.post('/forum/search', async (req,res)=>{
    console.log('收到搜索请求')
    console.log(req.params)
    console.log('keywords:',req.body.num)
    let data = await searchData(req.body.num,req.body.keywords)
    console.log(data)
    res.send(data)
})

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))

async function getData(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = [];
            let type = ['公告','水贴'];
            for(let i=0; i<num; i++){
                data[i] = {
                    post_id:i,
                    post_title:`这是第${i}篇帖子`,
                    user_id:i,
                    user_name:`我是第${i}个发布者`,
                    time_stamp:new Date().getTime(),
                    content:'无意义的水贴',
                    views:Math.random(),
                    post_type:type[Math.floor(Math.random()*2)],
                }
            }
            resolve(data);
        },500);
    });
}

async function searchData(num,keyWords){
    console.log(keyWords);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = [];
            let type = ['公告','水贴'];
            for(let i=0; i<num; i++){
                data[i] = {
                    post_id:i,
                    post_title:`这是第${i}篇帖子`,
                    user_id:i,
                    user_name:`我是第${i}个发布者`,
                    time_stamp:new Date().getTime(),
                    content:`无意义的水贴+${keyWords[i%2]}+关键词`,
                    views:Math.random(),
                    post_type:type[Math.floor(Math.random()*2)],
                }
            }
            resolve(data);
        },500);
    });
}