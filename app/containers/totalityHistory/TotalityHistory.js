import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import '../../static/css/total_topten.css'
import HisTable from '../../components/table/historyTable'

const data = [{
    key: '1',
    time : '2016年6月',
    electric: '666°',
    error: '222°',
    expect: '888°',
},
{
    key: '2',
    time : '2016年7月',
    electric: '666°',
    error: '222°',
    expect: '888°',
}
,{
    key: '3',
    time : '2016年8月',
    electric: '666°',
    error: '222°',
    expect: '888°',
},
{
    key: '4',
    time : '2016年9月',
    electric: '666°',
    error: '222°',
    expect: '888°',
}];
const timeSpaceArr = [{
    key: '1',
    time : '2016年6月',
    electric: '666°',
    error: '222°',
    expect: '888°',
},
{
    key: '2',
    time : '2016年7月',
    electric: '666°',
    error: '222°',
    expect: '888°',
}
,{
    key: '3',
    time : '2016年8月',
    electric: '666°',
    error: '222°',
    expect: '888°',
},
{
    key: '4',
    time : '2016年9月',
    electric: '666°',
    error: '222°',
    expect: '888°',
}];
const columns = [ {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '每月实际用电量',
    dataIndex: 'electric',
    key: 'electric',
}, {
    title: '预测值',
    dataIndex: 'expect',
    key: 'expect',
}, {
    title: '误差值',
    dataIndex: 'error',
    key: 'error',
}
];
class History extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns,
            data,
            timeSpace:timeSpaceArr
        }
    }

    render() {
        return (
            <div className='toptenContainer'>
                <HisTable timeSpace={this.state.timeSpace} columns={this.state.columns} data={this.state.data}/>
            </div>
        )
    }
}

module.exports = History