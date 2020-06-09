export var server_config = {
    backend_url: 'http://192.168.31.78:8081',
    GetChina:{
        // 获取国内数据
        url:'request/map/chinaMap/select',
        sum:'sum',//全国总计
        province:'province',//某省
        city:'city',//某市
        compare:'compare', //比较
        joinProvince:'joinProvince',
        joinCity:'joinCity'
    },
    GetWorld:{
        // 获取全球数据
        url:'request/map/foreignMap/select',
        sum:'sum',//全球总计
        country:'country',//某省
        city:'city',//某市
        compare:'compare', //比较
        joinCountry:'joinCountry'
    },
    GetAnalysis:{
        //数据分析的接口
        age:'request/map/Age/select',
        gender:'request/map/Gender/select',
        line:'topSeries'
    }

}