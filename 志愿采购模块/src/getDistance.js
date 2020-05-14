var axios =  require('axios');
var instance=axios.create({
    baseURL:'http://api.map.baidu.com/geocoding',//改成服务器的url
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
function rad(d){
    return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
}

function getDistance(addr1, addr2) {
    var data = {
        address: addr1,
        output: 'json',
        ak: '9uswht6UtGPzqHeKDng2QGI3yymX5LOi'
    }
    instance.get('/v3',{params:data}).then(function (response) {
        res1 = response.data.result.location;
        console.log(res1);
        data.address = addr2;
        instance.get('/v3',{params:data}).then(function (response) {
            res2 = response.data.result.location;
		    lat1 = res1.lat;
            lat2 = res2.lat;
            lng1 = res1.lng;
            lng2 = res2.lng;
			var radLat1 = rad(lat1);
            var radLat2 = rad(lat2);
            var a = radLat1 - radLat2;
            var b = rad(lng1) - rad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137;
            console.log(s);
            return s;
        })
    }).catch(function (error) {
        console.log(error);
    });
}

getDistance('杭州市西湖区浙江大学玉泉校区学生公寓32舍', '杭州市西湖区浙江大学玉泉校区4食堂')
