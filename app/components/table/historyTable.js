import React from 'react'


import { Table, Icon, Button, Radio, Input } from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'
import SelectTime from '../selectTime/SelectTime'




const columns = [ {
    title: '时间',
    dataIndex: 'monthDate',
    key: 'monthDate',
}, {
    title: '每月实际用电量',
    dataIndex: 'realData',
    key: 'realData',
}, {
    title: '预测值',
    dataIndex: 'predictData',
    key: 'predictData',
}, {
    title: '误差值',
    dataIndex: 'error',
    key: 'error',
}
];
class TopTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns : columns,
            data: [],
            timeSpace: []
        }
    }
    getArrData(){
          // const _url = 'http://192.168.0.106:8080/siemenspre_war_exploded/edata/getRealtimeAll?userId=1';
            // fetch(_url, {
            //     method: 'GET'
            // }).then(response => response.json()).then(values => {
            //     });
            const getArr = {
                "available_month": ["2016-01", "2016-06"],
                "day_data": [
                    {  
                    "dayDate": "2016-04-01",
                    "predictData": 4243079,
                    "realData": 4928545
                    }, {
                        "dayDate": "2016-04-02",
                        "predictData": 4354906,
                        "realData": 4916933
                    }, {
                        "dayDate": "2016-04-03",
                        "predictData": 3994045,
                        "realData": 5244595
                    }, {
                        "dayDate": "2016-04-04",
                        "predictData": 4026625,
                        "realData": 5294975
                    }, {
                        "dayDate": "2016-04-05",
                        "predictData": 3934463,
                        "realData": 3814347
                    }, {
                        "dayDate": "2016-04-06",
                        "predictData": 3952015,
                        "realData": 4701601
                    }, {
                        "dayDate": "2016-04-07",
                        "predictData": 4148499,
                        "realData": 5288316
                    }, {
                        "dayDate": "2016-04-08",
                        "predictData": 3511349,
                        "realData": 4323356
                    }, {
                        "dayDate": "2016-04-09",
                        "predictData": 3718366,
                        "realData": 4294798
                    }, {
                        "dayDate": "2016-04-10",
                        "predictData": 4050907,
                        "realData": 4158698
                    }, {
                        "dayDate": "2016-04-11",
                        "predictData": 3429158,
                        "realData": 4176373
                    }, {
                        "dayDate": "2016-04-12",
                        "predictData": 3458505,
                        "realData": 4482561
                    }, {
                        "dayDate": "2016-04-13",
                        "predictData": 3856076,
                        "realData": 4805973
                    }, {
                        "dayDate": "2016-04-14",
                        "predictData": 3542044,
                        "realData": 4798801
                    }, {
                        "dayDate": "2016-04-15",
                        "predictData": 3436781,
                        "realData": 4820280
                    }, {
                        "dayDate": "2016-04-16",
                        "predictData": 3598093,
                        "realData": 4828289
                    }, {
                        "dayDate": "2016-04-17",
                        "predictData": 3383443,
                        "realData": 4881318
                    }, {
                        "dayDate": "2016-04-18",
                        "predictData": 3234903,
                        "realData": 4397782
                    }, {
                        "dayDate": "2016-04-19",
                        "predictData": 3345657,
                        "realData": 4696758
                    }, {
                        "dayDate": "2016-04-20",
                        "predictData": 3091365,
                        "realData": 5478409
                    }, {
                        "dayDate": "2016-04-21",
                        "predictData": 3332266,
                        "realData": 4631584
                    }, {
                        "dayDate": "2016-04-22",
                        "predictData": 3166864,
                        "realData": 4904026
                    }, {
                        "dayDate": "2016-04-23",
                        "predictData": 3263353,
                        "realData": 5052942
                    }, {
                        "dayDate": "2016-04-24",
                        "predictData": 3427754,
                        "realData": 5265104
                    }, {
                        "dayDate": "2016-04-25",
                        "predictData": 3398071,
                        "realData": 5437844
                    }, {
                        "dayDate": "2016-04-26",
                        "predictData": 3348492,
                        "realData": 5307815
                    }, {
                        "dayDate": "2016-04-27",
                        "predictData": 3595732,
                        "realData": 5522880
                    }, {
                        "dayDate": "2016-04-28",
                        "predictData": 3554713,
                        "realData": 5636594
                    }, {
                        "dayDate": "2016-04-29",
                        "predictData": 3564009,
                        "realData": 5936703
                    }, {
                        "dayDate": "2016-04-30",
                        "predictData": 3366476,
                        "realData": 5496833
                    }, {
                        "dayDate": "2016-05-01",
                        "predictData": 5004075,
                        "realData": 4048043
                    }, {
                        "dayDate": "2016-05-02",
                        "predictData": 5417293,
                        "realData": 4504617
                    }, {
                        "dayDate": "2016-05-03",
                        "predictData": 5526478,
                        "realData": 5524496
                    }, {
                        "dayDate": "2016-05-04",
                        "predictData": 5343440,
                        "realData": 6097965
                    }, {
                        "dayDate": "2016-05-05",
                        "predictData": 5334709,
                        "realData": 6164683
                    }, {
                        "dayDate": "2016-05-06",
                        "predictData": 5172754,
                        "realData": 6138134
                    }, {
                        "dayDate": "2016-05-07",
                        "predictData": 4771127,
                        "realData": 6277354
                    }, {
                        "dayDate": "2016-05-08",
                        "predictData": 4686569,
                        "realData": 6220291
                    }, {
                        "dayDate": "2016-05-09",
                        "predictData": 4826827,
                        "realData": 6006679
                    }, {
                        "dayDate": "2016-05-10",
                        "predictData": 4983045,
                        "realData": 5368082
                    }, {
                        "dayDate": "2016-05-11",
                        "predictData": 5078507,
                        "realData": 5704587
                    }, {
                        "dayDate": "2016-05-12",
                        "predictData": 5002264,
                        "realData": 5434182
                    }, {
                        "dayDate": "2016-05-13",
                        "predictData": 4776463,
                        "realData": 5379264
                    }, {
                        "dayDate": "2016-05-14",
                        "predictData": 4712162,
                        "realData": 4135452
                    }, {
                        "dayDate": "2016-05-15",
                        "predictData": 4714828,
                        "realData": 4487691
                    }, {
                        "dayDate": "2016-05-16",
                        "predictData": 4763081,
                        "realData": 5125861
                    }, {
                        "dayDate": "2016-05-17",
                        "predictData": 4890639,
                        "realData": 4402863
                    }, {
                        "dayDate": "2016-05-18",
                        "predictData": 5028856,
                        "realData": 4745060
                    }, {
                        "dayDate": "2016-05-19",
                        "predictData": 4943032,
                        "realData": 5531640
                    }, {
                        "dayDate": "2016-05-20",
                        "predictData": 4846830,
                        "realData": 5768995
                    }, {
                        "dayDate": "2016-05-21",
                        "predictData": 4796807,
                        "realData": 5634585
                    }, {
                        "dayDate": "2016-05-22",
                        "predictData": 4870282,
                        "realData": 5353741
                    }, {
                        "dayDate": "2016-05-23",
                        "predictData": 4979293,
                        "realData": 5545163
                    }, {
                        "dayDate": "2016-05-24",
                        "predictData": 5142588,
                        "realData": 5375912
                    }, {
                        "dayDate": "2016-05-25",
                        "predictData": 5183599,
                        "realData": 5594162
                    }, {
                        "dayDate": "2016-05-26",
                        "predictData": 4973194,
                        "realData": 5496360
                    }, {
                        "dayDate": "2016-05-27",
                        "predictData": 4878319,
                        "realData": 6019838
                    }, {
                        "dayDate": "2016-05-28",
                        "predictData": 4958148,
                        "realData": 5962492
                    }, {
                        "dayDate": "2016-05-29",
                        "predictData": 5066229,
                        "realData": 5729538
                    }, {
                        "dayDate": "2016-05-30",
                        "predictData": 5130160,
                        "realData": 5897801
                    }, {
                        "dayDate": "2016-05-31",
                        "predictData": 5273964,
                        "realData": 5958520
                    }, {
                        "dayDate": "2016-06-01",
                        "predictData": 5591043,
                        "realData": 5847391
                    }, {
                        "dayDate": "2016-06-02",
                        "predictData": 5844178,
                        "realData": 6539116
                    }, {
                        "dayDate": "2016-06-03",
                        "predictData": 5788267,
                        "realData": 6437058
                    }, {
                        "dayDate": "2016-06-04",
                        "predictData": 5844105,
                        "realData": 5504774
                    }, {
                        "dayDate": "2016-06-05",
                        "predictData": 5960042,
                        "realData": 5735719
                    }, {
                        "dayDate": "2016-06-06",
                        "predictData": 5970942,
                        "realData": 5654667
                    }, {
                        "dayDate": "2016-06-07",
                        "predictData": 6125495,
                        "realData": 5662183
                    }, {
                        "dayDate": "2016-06-08",
                        "predictData": 6128672,
                        "realData": 5841074
                    }, {
                        "dayDate": "2016-06-09",
                        "predictData": 6111544,
                        "realData": 6625928
                    }, {
                        "dayDate": "2016-06-10",
                        "predictData": 5972009,
                        "realData": 6695853
                    }, {
                        "dayDate": "2016-06-11",
                        "predictData": 5782013,
                        "realData": 6806517
                    }, {
                        "dayDate": "2016-06-12",
                        "predictData": 5625832,
                        "realData": 6859608
                    }, {
                        "dayDate": "2016-06-13",
                        "predictData": 5139759,
                        "realData": 6885618
                    }, {
                        "dayDate": "2016-06-14",
                        "predictData": 5501307,
                        "realData": 6972640
                    }, {
                        "dayDate": "2016-06-15",
                        "predictData": 6116723,
                        "realData": 7492502
                    }, {
                        "dayDate": "2016-06-16",
                        "predictData": 6312251,
                        "realData": 7006799
                    }, {
                        "dayDate": "2016-06-17",
                        "predictData": 6343578,
                        "realData": 6866774
                    }, {
                        "dayDate": "2016-06-18",
                        "predictData": 6131483,
                        "realData": 6810560
                    }, {
                        "dayDate": "2016-06-19",
                        "predictData": 5926325,
                        "realData": 6522077
                    }, {
                        "dayDate": "2016-06-20",
                        "predictData": 5683850,
                        "realData": 6013705
                    }, {
                        "dayDate": "2016-06-21",
                        "predictData": 5769461,
                        "realData": 5540481
                    }, {
                        "dayDate": "2016-06-22",
                        "predictData": 5934922,
                        "realData": 5635859
                    }, {
                        "dayDate": "2016-06-23",
                        "predictData": 5820599,
                        "realData": 6149889
                    }, {
                        "dayDate": "2016-06-24",
                        "predictData": 5932872,
                        "realData": 6070964
                    }, {
                        "dayDate": "2016-06-25",
                        "predictData": 5882933,
                        "realData": 6317361
                    }, {
                        "dayDate": "2016-06-26",
                        "predictData": 5732877,
                        "realData": 6195490
                    }, {
                        "dayDate": "2016-06-27",
                        "predictData": 5979603,
                        "realData": 6741897
                    }, {
                        "dayDate": "2016-06-28",
                        "predictData": 6375672,
                        "realData": 6433758
                    }, {
                        "dayDate": "2016-06-29",
                        "predictData": 6364360,
                        "realData": 6332592
                    }, {
                        "dayDate": "2016-06-30",
                        "predictData": 6393155,
                        "realData": 6084952
                }],
                    "month_data": [{
                        "monthDate": "2016-04",
                        "predictData": 108328009,
                        "realData": 147525033
                    }, {
                        "monthDate": "2016-05",
                        "predictData": 155075562,
                        "realData": 169634051
                    }, {
                        "monthDate": "2016-06",
                        "predictData": 178085872,
                        "realData": 190283806
                    }
                ]
            }
            // 数据处理 拼接表格数据
            let month_data = getArr.month_data ;
            month_data.map((item)=>{
                item.error = Math.abs(item.realData - item.predictData);
                item.key = item.monthDate
            })
            // 拼接时间
            let timeArr = getArr.available_month, timeSpace = [], curMonth, timeStr,
            yearMonth = timeArr[0].split('-');
    
            for(let i = 0; i < 6 ; i++){
                let curMonth = parseInt(yearMonth[1]);
                curMonth += i
                curMonth > 12?
                timeStr = ++yearMonth[0] + '年' + (curMonth - 12) + '月':
                timeStr = yearMonth[0] + '年' + curMonth + '月';
                timeSpace.push(timeStr);
            }
            console.log(timeSpace);
            this.setState({
                data : month_data,
                timeSpace : timeSpace
            })
    }
    componentWillMount(){
        this.getArrData()
    }
    searchTime(str, end) {
        let tempObj = this.state.timeSpace,
        strNum = parseInt(str),
        endNum = parseInt(end);
        console.log(strNum - endNum)
        if(strNum - endNum > 0){
            // let spliceArr = tempObj.splice(str, end);
            // console.log(spliceArr);
            // this.setState({
            //     data: spliceArr
            // })
            this.getArrData();
        }else{
            console.log('请输入正确的区间');
            
        }
    }
    render() {
        return (
            <div>
                <div className='topHeader'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ width: '30%' }}>
                        <SelectTime searchTime={this.searchTime.bind(this)} timeSelect={this.state.timeSpace} />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}/>
            </div>

        )
    }
}

module.exports = TopTable