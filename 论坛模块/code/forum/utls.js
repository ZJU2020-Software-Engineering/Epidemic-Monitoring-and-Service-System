import { AsyncStorage } from "react-native";

export var host = "http://172.20.10.11";
export var port = 3000;

export function randomString(len) {
	len = len || 32;
	var $chars =
		"abcdefhijkmnprstwxyz";
	var maxPos = $chars.length;
	var pwd = "";
	for (i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}

function formatDateString(timestamp) {
	let time = new Date(timestamp);
	return (`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`);
}

export async function makeFetch(url, method, data) {
	try {
		let response = await fetch(url, {
			method: method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let responseJson = await response.json();
		return responseJson;
	} catch (error) {
		console.error(error);
	}
}

export function httpRequest(url, method, data) {
	console.log(url, method);
	var httpRequest = new XMLHttpRequest();
	httpRequest.open(method, url, true);
	httpRequest.setRequestHeader(
		"Content-type",
		"application/x-www-form-urlencoded"
	);
	httpRequest.send("username=aaa&password=bbb");

	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			var json = httpRequest.responseText;
			console.log("get response");
			return json;
		} else {
			var result = { state: "error" };
			console.log(
				httpRequest.readyState,
				httpRequest.status,
				httpRequest.responseText
			);
			return result;
		}
	};
}

export async function getToken() {
	let value = await AsyncStorage.getItem("userToken");
	if (value !== null) {
		console.log("get success");
		console.log(value);
		return value;
	} else {
		console.log("error");
		return null;
	}
}

const postListUrl = host + ":" + port + "/forum/post/list/";
const searchUrl = host + ":" + port + "/forum/search/";

async function getPostDateAsync(mode, postNum){
    
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

async function searchPostDataAsync(keyWords, postNum){
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

export { getPostDateAsync, searchPostDataAsync };
