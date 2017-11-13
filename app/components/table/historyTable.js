import React from 'react'


import { Table, Icon, Button, Radio, Input } from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'
import SelectTime from '../selectTime/SelectTime'
// 引入图标组件
import EchartBar from '../../components/echarts/EchartBar'



const columns = [{
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
            columns: columns,
            data: [],
            timeSpace: [],
            loading: true,
            graphArrList:[],
            timeTempSpace:[]
        }
    }

    getArrData(url) {
        const _url = url || `http://192.168.0.103:8080/siemenspre_war_exploded/edata/getHistory?id=1&flag=user&startDate=none&endDate=none`;
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            console.log(values);


            let getArr = values;
            console.log(getArr);
            // 数据处理 拼接表格数据
            let month_data = getArr.month_data;
            month_data.map((item) => {
                item.error = Math.abs(item.realData - item.predictData);
                item.key = item.monthDate
            })
            // 拼接时间
            let timeArr = getArr.available_month, timeSpace = [], curMonth, timeStr,timeTempStr,timeTempSpace=[],
                yearMonth = timeArr[0].split('-');
            for (let i = 0; i < 6; i++) {
                let curMonth = parseInt(yearMonth[1]);
                curMonth += i
                curMonth > 12 ?
                    timeStr = ++yearMonth[0] + '年' + (curMonth - 12) + '月' :
                    timeStr = yearMonth[0] + '年' + curMonth + '月';



                curMonth > 12 ?
                timeTempStr = ++yearMonth[0] + '-' + (curMonth - 12):
                timeTempStr = yearMonth[0] + '-' + curMonth ;
                timeSpace.push(timeStr);
                timeTempSpace.push(timeTempStr);
            }
           
            let graphArrList = [];
            // 获取graph 对象
            getArr.day_data.map((item) => {
                graphArrList.push(this.creatLineGraph(item));
            })

            this.setState({
                data: month_data,
                timeSpace: timeSpace,
                graphArrList: graphArrList,
                timeTempSpace:timeTempSpace
            })
        });
    }
    // 生成折线图对象
    creatLineGraph(obj) {
       
        // 获取年与月
        let yearMonth = obj.curMonth.split('-');
        let timeLineArr = [];
        for (let i = 0; i < obj.predictDataArr.length; i++) {
            timeLineArr.push(i+1);
        }
        console.log(yearMonth)
        let graphObj = {
            title: `${yearMonth[0]}年${yearMonth[1]}月用电量`,
            key: obj.curMonth,
            realBar: obj.realDataArr,
            predictBar: obj.predictDataArr,
            timeLine: timeLineArr,
            type: 'line'
        }
        return graphObj
    }
    componentDidMount() {
        this.getArrData()
    }
    searchTime(str, end) {
        let tempObj = this.state.timeSpace,
            strNum = parseInt(str),
            endNum = parseInt(end);
            console.log(strNum+ '-'+ endNum)
        if (strNum - endNum < 0) {
            // let spliceArr = tempObj.splice(str, end);
            // this.setState({
            //     data: spliceArr
            // })
            let strData = this.state.timeTempSpace[strNum];
            let endData = this.state.timeTempSpace[endNum];
            if(strData.split('-')[1]<=9){
                strData = strData.split('-')[0]+'-0'+strData.split('-')[1];
                endData = endData.split('-')[0]+'-0'+endData.split('-')[1];
            }
            
            let url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/getHistory?id=1&flag=user&startDate=${strData}&endDate=${endData}`
            this.getArrData(url);
        } else {
            console.log('请输入正确的区间');

        }
    }
    render() {
        console.log(this.state.timeSpace);
        return (
            <div>
                <div className='topHeader' style={{ background: '#fff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ width: '30%' }}>
                        <SelectTime searchTime={this.searchTime.bind(this)} timeSpace={this.state.timeSpace} />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />

                {
                    this.state.graphArrList.map((item, index) => {
                        return (
                            <div key={index} className='analyzeContent' style={{ height: '455px', marginTop: '20px' }}>
                                <EchartBar content={item} />
                            </div>
                        )
                    })
                }
            </div>


        )
    }
}

module.exports = TopTable