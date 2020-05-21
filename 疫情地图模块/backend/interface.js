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
                  newAddtion: [],
                  total: [],
                  extance: []
                }
              }
        },
        joinprovince:{ //获取全国省的具体信息联表
            input:{
                Return:"joinProvince",
                Data:"YYYY-MM-DD"
            },
            output:{
                result: 'Y',
                message:[
                    {province: "",
                    newAddtionConfirmedNumber: 0,
                    newAddtionDeathToll: 0,
                    newAddtionCureNumber: 0,
                    newAddtionSuspectedNumber: 0,
                    grandTotalConfirmedNumber: 22,
                    grandTotalDeathToll: 0,
                    grandTotalCureNumber: 22,
                    grandTotalSuspectedNumber: 0,
                    existingConfirmedNumber: 0,
                    existingSuspectedNumber: 0},{}
                ]
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
                  newAddtion: [],
                  total: [],
                  extance: []
                }
              }
        },
        joincity:{ //获取省内各市的具体信息联表
            input:{
                Return:"joinCity",
                Data:"YYYY-MM-DD",
                Province:"省份"
            },
            output:{
                result: 'Y',
                message:[
                    {city: "",
                    newAddtionConfirmedNumber: 0,
                    newAddtionDeathToll: 0,
                    newAddtionCureNumber: 0,
                    newAddtionSuspectedNumber: 0,
                    grandTotalConfirmedNumber: 22,
                    grandTotalDeathToll: 0,
                    grandTotalCureNumber: 22,
                    grandTotalSuspectedNumber: 0,
                    existingConfirmedNumber: 0,
                    existingSuspectedNumber: 0},{}
                ]
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
    GetForeign:{
        url:'request/map/foreignMap/select',
        sum:{ //获取全球某日统计数据
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
        compare:{ //获取全球当天同昨日的比较值
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
        },
        country:{ //获取全球各国某日的具体信息
            input:{
                Return:"country",
                Data:"YYYY-MM-DD"
            },
            output:{
                result: 'Y',
                message: {
                  newAddtion: [{country:"",
                  confirmedNumber: 0,
                  deathToll: 0,
                  cureNumber: 0,
                  suspectedNumber: 0},{}],
                  total: [],
                  extance: [{country:"",confirmedNumber: 0, suspectedNumber: 0},{}]
                }
              }
        },
        joincountry:{ //获取全球各国的具体信息联表
            input:{
                Return:"joinCountry",
                Data:"YYYY-MM-DD"
            },
            output:{
                result: 'Y',
                message:[
                    {country: "",
                    newAddtionConfirmedNumber: 0,
                    newAddtionDeathToll: 0,
                    newAddtionCureNumber: 0,
                    newAddtionSuspectedNumber: 0,
                    grandTotalConfirmedNumber: 22,
                    grandTotalDeathToll: 0,
                    grandTotalCureNumber: 22,
                    grandTotalSuspectedNumber: 0,
                    existingConfirmedNumber: 0,
                    existingSuspectedNumber: 0},{}
                ]
            }
        },
    }
}
