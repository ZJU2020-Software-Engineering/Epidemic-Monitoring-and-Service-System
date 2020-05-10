const postListUrl = 'http://192.168.1.4:3291/forum/post/list/'
const searchUrl = 'http://192.168.1.4:3291/forum/search/'

async function _getPostDateAsync(mode, postNum){
    
    return new Promise((resolve,reject)=>{
        fetch(postListUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                type:mode,
                num:postNum
            })
        }
        ).then((response)=>{
            console.log(response)
            if(response.ok) return response.json()
            else reject(response.status)
        })
        .then(value=>{console.log(value);resolve(value)})
        .catch(error=>{console.log(error);reject(1)})
    });
}

async function _searchPostDataAsync(keyWords, postNum){
    return new Promise((resolve,reject)=>{
        fetch(searchUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                keywords:keyWords,
                num:postNum
            })
        }
        ).then((response)=>{
            console.log(response)
            if(response.ok) return response.json()
            else reject(response.status)
        })
        .then(value=>{console.log(value);resolve(value)})
        .catch(error=>{console.log(error);reject(1)})
    });
}

export {_getPostDateAsync, _searchPostDataAsync};

/*
async function _getPostDateAsync(mode, postNum){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = [];
            let type = ['公告','水贴'];
            for(let i=0; i<postNum; i++){
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
        },5000);
    });
}
*/

/*
console.log('kewords:',keyWords)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = [];
            let type = ['公告','水贴'];
            for(let i=0; i<postNum; i++){
                data[i] = {
                    post_id:i,
                    post_title:`这是第${i}篇帖子`,
                    user_id:i,
                    user_name:`我是第${i}个发布者`,
                    time_stamp:new Date().getTime(),
                    content:'无意义的水贴'+keyWords[Math.floor(Math.random()*2)]+'关键词',
                    views:Math.random(),
                    post_type:type[Math.floor(Math.random()*2)],
                }
            }
            resolve(data);
        },5000);
    });

*/