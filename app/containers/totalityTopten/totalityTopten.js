import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import '../../static/css/total_topten.css'
import Table from '../../components/table/table'


let columns = [{
    title: '排名',
    dataIndex: 'top',
    key: 'top',
    render: (text, record,dataIndex) => {
        return (
            <div className='topTenLogo'>{dataIndex+1}</div>
        )
    }

}, {
    title: '用户名',
    dataIndex: 'customerName',
    key: 'customerName',
}, {
    title: '用电量',
    dataIndex: 'realData',
    key: 'realData',
}, {
    title: '误差',
    dataIndex: 'error',
    key: 'error',
}, {
    title: '地理位置',
    dataIndex: 'position',
    key: 'position',
}
];

class Topten extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataArr: []
        }
    }
    getTopData(){
           // const _url = 'http://192.168.0.106:8080/siemenspre_war_exploded/edata/getRealtimeAll?userId=1';
        // fetch(_url, {
        //     method: 'GET'
        // }).then(response => response.json()).then(values => {
        //     //    重新排序
        //     values.m_customer.filter(x => {
        //         if (x.error < 0) {
        //             x.error = -x.error;
        //             console.log(x.error);
        //             return x;
        //         }
        //     });
        const topTenArr = {
            "current_page": 2,
            "page_amount": 2,
            "userInfor": [
                {
                    "customerName": "user1029356",
                    "error": 1,
                    "position": "Beijing",
                    "realData": 567909554
                }, {
                    "customerName": "user1029351",
                    "error": 1,
                    "position": "Beijing",
                    "realData": 546260009
                }, {
                    "customerName": "user1029414",
                    "error": 11,
                    "position": "Beijing",
                    "realData": 133497986
                }, {
                    "customerName": "user1028802",
                    "error": 0,
                    "position": "Beijing",
                    "realData": 131330754
                }, {
                    "customerName": "user1029010",
                    "error": 0,
                    "position": "Beijing",
                    "realData": 117058710
                }, {
                    "customerName": "user1028978",
                    "error": 0,
                    "position": "Beijing",
                    "realData": 101286417
                }, {
                    "customerName": "uaser1029037",
                    "error": 1,
                    "position": "Beijing",
                    "realData": 97382457
                }, {
                    "customerName": "user1029051",
                    "error": 8,
                    "position": "Beijing",
                    "realData": 90444372
                }, {
                    "customerName": "user1029107",
                    "error": -2,
                    "position": "Beijing",
                    "realData": 23962889
                }, {
                    "customerName": "uaser1029164",
                    "error": -48,
                    "position": "Beijing",
                    "realData": 18645486
                }
            ]
        }
        topTenArr.userInfor.map((item)=>{
            item.error += '%';
            item.key = item.customerName
        })
        this.setState({
            dataArr: topTenArr.userInfor
        })
    }
    componentWillMount(){
        this.getTopData();
    }
    render() {
        return (
            <div className='toptenContainer'>
                <Table columns={columns} data={this.state.dataArr}/>
            </div>
        )
    }
}

module.exports = Topten