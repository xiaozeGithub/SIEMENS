import React from 'react'


import { Table, Icon, Button, Radio, Input } from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'
import SelectTime from '../selectTime/SelectTime'
// 引入图标组件
import EchartBar from '../../components/echarts/EchartBar'



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
                
                    "day_data": [{
                        "curMonth": "2016-04",
                        "dayDateArr": ["2016-04-01", "2016-04-02", "2016-04-03", "2016-04-04", "2016-04-05", "2016-04-06", "2016-04-07", "2016-04-08", "2016-04-09", "2016-04-10", "2016-04-11", "2016-04-12", "2016-04-13", "2016-04-14", "2016-04-15", "2016-04-16", "2016-04-17", "2016-04-18", "2016-04-19", "2016-04-20", "2016-04-21", "2016-04-22", "2016-04-23", "2016-04-24", "2016-04-25", "2016-04-26", "2016-04-27", "2016-04-28", "2016-04-29", "2016-04-30"],
                        "predictDataArr": [11953, 12146, 12386, 12336, 12270, 12288, 12536, 12356, 11886, 11701, 11459, 11819, 11818, 11970, 11949, 12002, 12076, 12166, 11989, 12077, 12614, 12435, 12209, 11357, 10566, 10294, 9724, 10329, 10854, 11659],
                        "realDataArr": [11239, 12991, 13144, 11886, 6629, 11582, 12953, 12496, 12534, 12763, 12267, 11963, 12610, 12801, 13029, 13144, 13144, 13029, 12915, 13563, 12953, 12915, 12991, 13220, 12991, 12877, 13334, 13677, 13525, 12991]
                    }, {
                        "curMonth": "2016-05",
                        "dayDateArr": ["2016-05-01", "2016-05-02", "2016-05-03", "2016-05-04", "2016-05-05", "2016-05-06", "2016-05-07", "2016-05-08", "2016-05-09", "2016-05-10", "2016-05-11", "2016-05-12", "2016-05-13", "2016-05-14", "2016-05-15", "2016-05-16", "2016-05-17", "2016-05-18", "2016-05-19", "2016-05-20", "2016-05-21", "2016-05-22", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26", "2016-05-27", "2016-05-28", "2016-05-29", "2016-05-30", "2016-05-31"],
                        "predictDataArr": [12286, 12202, 12198, 12221, 12196, 12189, 12186, 12188, 12187, 12188, 12211, 12197, 12187, 12184, 12178, 12176, 12177, 12173, 12172, 12172, 12170, 12175, 12176, 12183, 12183, 12182, 12184, 12185, 12183, 12184, 12185],
                        "realDataArr": [7162, 11277, 13220, 13296, 14248, 13829, 13982, 14248, 13867, 12115, 13639, 13029, 13448, 14096, 14477, 13067, 11277, 10591, 13791, 14515, 14058, 13715, 13791, 12801, 14096, 14477, 14591, 15125, 15277, 14405, 14436]
                    }, {
                        "curMonth": "2016-06",
                        "dayDateArr": ["2016-06-01", "2016-06-02", "2016-06-03", "2016-06-04", "2016-06-05", "2016-06-06", "2016-06-07", "2016-06-08", "2016-06-09", "2016-06-10", "2016-06-11", "2016-06-12", "2016-06-13", "2016-06-14", "2016-06-15", "2016-06-16", "2016-06-17", "2016-06-18", "2016-06-19", "2016-06-20", "2016-06-21", "2016-06-22", "2016-06-23", "2016-06-24", "2016-06-25", "2016-06-26", "2016-06-27", "2016-06-28", "2016-06-29", "2016-06-30"],
                        "predictDataArr": [14970, 15307, 15353, 15297, 15117, 15320, 15326, 15199, 14387, 14426, 14687, 15191, 15163, 15294, 15182, 15229, 15312, 15381, 15453, 15341, 15526, 15412, 15468, 15754, 15781, 16131, 16062, 16088, 15842, 15830],
                        "realDataArr": [14363, 14744, 15201, 15506, 15277, 14896, 14553, 15391, 15582, 15506, 16115, 15963, 15963, 16420, 16991, 16306, 16687, 16191, 15848, 10439, 14325, 14706, 14776, 14706, 12801, 15887, 16458, 16115, 16534, 16572]
                    }],
                    "month_data": [{
                        "monthDate": "2016-04",
                        "predictData": 353224,
                        "realData": 378156
                    }, {
                        "monthDate": "2016-05",
                        "predictData": 377858,
                        "realData": 415946
                    }, {
                        "monthDate": "2016-06",
                        "predictData": 460829,
                        "realData": 460822
                    }]
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
            let graphArrList = [];
            // 获取graph 对象
            getArr.day_data.map((item)=>{
                graphArrList.push(this.creatLineGraph(item));
                
            })
         
            this.setState({
                data : month_data,
                timeSpace : timeSpace,
                graphArrList: graphArrList
            })
    }
    // 生成折线图对象
    creatLineGraph(obj){
        // 获取年与月
        let yearMonth = obj.curMonth.split('-');
        let timeLineArr = [];
        for(let i = 0; i < obj.predictDataArr.length;i++){
            timeLineArr.push(++i);
        }
        let graphObj = {
            title: `${yearMonth[0]}年${yearMonth[1]}月用电量`,
            key: obj.curMonth,
            realBar: obj.realDataArr,
            predictBar: obj.predictDataArr ,
            timeLine: timeLineArr,
            type: 'line'
        }
        return graphObj
    }
    componentWillMount(){
        this.getArrData()
    }
    searchTime(str, end) {
        let tempObj = this.state.timeSpace,
        strNum = parseInt(str),
        endNum = parseInt(end);
        if(strNum - endNum > 0){
            // let spliceArr = tempObj.splice(str, end);
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
                <div className='topHeader' style={{background:'#fff'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ width: '30%' }}>
                        <SelectTime searchTime={this.searchTime.bind(this)} timeSelect={this.state.timeSpace} />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}/>
               <div className='analyzeContent' style={{height:'455px',marginTop:'20px'}}>
                    {
                            this.state.graphArrList.map((item, index) => {
                                return (
                                    <EchartBar key={index} content={item} />
                                )
                            })
                        }

                </div>
               
            </div>
            

        )
    }
}

module.exports = TopTable