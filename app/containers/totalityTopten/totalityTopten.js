import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import '../../static/css/total_topten.css'
import Table from '../../components/table/table'

let dataArr = [{
    key: '4',
    user: 'John Brown',
    electric: '666°',
    error: '13%',
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    user: 'Jim Green',
    electric: '200°',
    error: '15%',
    address: 'London No. 1 Lake Park',
}
, {
    key: '3',
    user: 'Joe Black',
    electric: '300°',
    error: '12%',
    address: 'Sidney No. 1 Lake Park',
}
, {
    key: '5',
    user: 'Aj',
    electric: '300°',
    error: '12%',
    address: 'Sidney No. 1 Lake Park',
}
, {
    key: '6',
    user: 'zening',
    electric: '300°',
    error: '12%',
    address: 'Sidney No. 1 Lake Park',
}
];

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
    dataIndex: 'user',
    key: 'user',
}, {
    title: '用电量',
    dataIndex: 'electric',
    key: 'electric',
}, {
    title: '误差',
    dataIndex: 'error',
    key: 'error',
}, {
    title: '地理位置',
    dataIndex: 'address',
    key: 'address',
}
];

class Topten extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className='toptenContainer'>
                <Table columns={columns} data={dataArr} />
            </div >
        )
    }
}

module.exports = Topten