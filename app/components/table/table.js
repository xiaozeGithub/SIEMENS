import React from 'react'


import { Table, Icon, Button, Radio, Input} from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'

const data = [{
    key: '1',
    user: 'John Brown',
    electric: '666°',
    error: '15%',
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    user: 'Jim Green',
    electric: '200°',
    error: '15%',
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    user: 'Joe Black',
    electric: '300°',
    error: '15%',
    address: 'Sidney No. 1 Lake Park',
}];
const columns = [{
    title: '排名',
    dataIndex: 'top',
    key: 'top',
    render: text =>
        <div className='topTenLogo'>{text}</div>
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



class TopTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns,
            data
        }
    }


    render() {
        return (
            <div>
                <div className='topHeader'>
                    <div style={{ display: 'flex',alignItems:'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Radio.Group>
                            <Radio.Button value="large">用电波动较大</Radio.Button>
                            <Radio.Button value="default">优质用户</Radio.Button>
                            <Radio.Button value="small">用电量</Radio.Button>
                        </Radio.Group>

                        <Search
                        className='searchInput'
                        placeholder="input search text"
                        style={{ width: 160,marginLeft:'15px'  }}
                        onSearch={value => console.log(value)}
                         />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>

        )
    }
}

module.exports = TopTable