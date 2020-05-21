var axios =  require('axios');
var fs=require('fs');

var instance=axios.create({
    baseURL:'http://121.199.7.115:9050',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 将这里'2567.jpg'修改为本地图片路径
var img = fs.readFileSync('/home/haotongl/2567.jpg', 'binary')
var data = {
    data: img,
    tp: '.jpg'
}
instance.post('/imgdb/upload', data).then(
    (res)=>{
        console.log(res.data);
    }
).catch(
    (error)=>{
        console.log('Failure');
    }
);

