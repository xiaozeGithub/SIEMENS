import React from 'react'


import { Table, Icon, Button, Radio, Input } from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'




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

class TopTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns: columns,
            flag: 'bad',
            pagination: {
                total: 0,
                current: 1
            },
            searchContent: ''
        }
    }

    getTopData(userid = 'userId' , flag, page ,limited=10) {
        // const _url = 'http://192.168.0.106:8080/siemenspre_war_exploded/edata/getRealtimeAll?userId=1';
        // fetch(_url, {
        //     method: 'GET'
        // }).then(response => response.json()).then(values => {
        //     });
        const topTenArr = {
            "current_page": 2,
            "page_amount": 1,
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
        const total = topTenArr.page_amount * 10;
        topTenArr.userInfor.map((item) => {
            item.error += '%';
            item.key = item.customerName
        })
        this.setState({
            dataArr: topTenArr.userInfor,
            pagination:{
                total,
                current: topTenArr.current_page
            }
        })
    }
    componentWillMount() {
        this.getTopData();
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        // pager.current = pagination.current;
        this.getTopData('userId', e.target.value, pagination.current, 10);
      }
    searchKeyWord(word) {
        let keyWord = word.toUpperCase();
        let filterName = this.data.filter((item) => {
            return item['user'].toUpperCase().indexOf(keyWord) !== -1
        });
        this.setState({
            data: filterName
        })
    }
    handleSizeChange = (e) => {
        // this.setState({ flag: e.target.value });
        let curentPages = this.state.pagination.current;
        if(e.target.value !== 'bad'){
            curentPages = 1;
        }
        this.getTopData('userId', e.target.value, curentPages, 10);
    }
    render() {
        return (
            <div>
                <div className='topHeader'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Radio.Group value={this.state.flag} onChange={this.handleSizeChange}>
                            <Radio.Button  value="bad">用电波动较大</Radio.Button>
                            <Radio.Button  value="good">优质用户</Radio.Button>
                            <Radio.Button  value="amount">用电量</Radio.Button>
                        </Radio.Group>

                        <Search
                            className='searchInput'
                            placeholder="input search text"
                            style={{ width: 160, marginLeft: '15px' }}
                            onSearch={value => this.searchKeyWord(value)}
                        />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.dataArr} onChange={this.handleTableChange} pagination={this.state.pagination} />
            </div>

        )
    }
}

module.exports = TopTable
