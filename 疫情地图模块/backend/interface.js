export var server_config = {
    backend_url: 'http://192.168.31.81/8081',
    GetChina:{
        // 获取国内数据
        url:'request/map/chinaMap/select',
        sum:{ //获取全国某日统计数据
            input:{
                Return:"sum",
                Data:"YYYY-MM-DD"
            },
            output:{
                result: 'Y',
                message: {
                  newAddtion: {
                    confirmedNumber: 0,
                    deathToll: 0,
                    cureNumber: 0,
                    suspectedNumber: 0
                  },
                  total: {
                    confirmedNumber: 166471,
                    deathToll: 9279,
                    cureNumber: 156975,
                    suspectedNumber: 1558
                  },
                  extance: { confirmedNumber: 181, suspectedNumber: 0 }
                }
              }
        },
        province:{ //获取全国省的具体信息
            input:{
                Return:"province",
                Data:"YYYY-MM-DD"
            },
            output:{
                result: 'Y',
                message: {
                  newAddtion: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ],
                  total: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ],
                  extance: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ]
                }
              }
        },
        city:{ //获取某省某日所有市的具体信息
            input:{
                Return:"city",
                Data:"YYYY-MM-DD",
                Province:"省份"
            },
            output:{
                result: 'Y',
                message: {
                  newAddtion: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ],
                  total: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ],
                  extance: [
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object], [Object], [Object],
                    [Object]
                  ]
                }
              }
        },
        compare:{ //获取全国当天同昨日的比较值
            input:{
                Return:"compare"
            },
            output:{
                result: 'Y',
                message: {
                  newAddtion: {
                    confirmedNumber: 0,
                    deathToll: 0,
                    cureNumber: 0,
                    suspectedNumber: 0
                  },
                  total: {
                    confirmedNumber: 0,
                    deathToll: 0,
                    cureNumber: 0,
                    suspectedNumber: 0
                  },
                  extance: { confirmedNumber: 0, suspectedNumber: 0 }
                }
              }
        }
    },
    

}
