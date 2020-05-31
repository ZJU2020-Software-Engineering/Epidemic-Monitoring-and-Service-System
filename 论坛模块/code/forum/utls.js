import { AsyncStorage } from 'react-native';

export var host = 'http://192.168.31.59'
export var port = 3000

export async function makeFetch(url, method, data) {
    try {
        let response = await fetch(url,{
                method:method,
                headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: data,
            });
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
    }
}

export function httpRequest(url, method, data) {
  console.log(url, method)
  var httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url, true);
  httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  httpRequest.send('username=aaa&password=bbb');

  httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          console.log("get response");
          return json
      }
      else{
        var result = {state:'error'};
        console.log(httpRequest.readyState, httpRequest.status,httpRequest.responseText);
        return result
      }
  };
}

export async function getToken() {
    let value = await AsyncStorage.getItem('userToken');
    if (value !== null){
        console.log('get success')
        console.log(value)
        return value;
    }
    else{
      console.log('error');
      return null;
    }
  }

const postListUrl = host + ':' + port + '/forum/post/list/'
const searchUrl = host + ':' + port + '/forum/search/'

async function getPostDateAsync(mode, postNum){
  
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
      },500);
  });
}


async function searchPostDataAsync(keyWords, postNum){
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
      },500);
  });
}


export {getPostDateAsync, searchPostDataAsync};