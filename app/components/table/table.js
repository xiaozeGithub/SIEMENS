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

    getTopData(url,callback) {
        const _url = url||`http://192.168.0.103:8080/siemenspre_war_exploded/edata/getCustomerRank?userid=1&flag=amount&page=1&limited=10&query=no_content`;
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            console.log(values);
            const topTenArr = values;
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
            if(callback){
                callback();
            }
                       
        });
       
    }
    componentDidMount() {
        this.getTopData();
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...pagination };
        console.log({...filters});
        let searchContent; 
        if(this.state.searchContent){
            searchContent = this.state.searchContent
        }else{
            searchContent = 'no_content'
        }
        const _url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/getCustomerRank?userid=1&flag=${this.state.flag}&page=${pager.current}&limited=10&query=${searchContent}`;
        // pager.current = pagination.current;
        console.log(_url);
        this.getTopData(_url);
      }
      searchKeyWord(value) {
          console.log(value)
        const _url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/getCustomerRank?userid=1&flag=${this.state.flag}&page=${this.state.pagination.current}&limited=10&query=${value}`
        this.getTopData(_url);
        this.setState({
            data:value
        })
    }
    handleSizeChange = (e) => {
        let curentPages = this.state.pagination.current;

        let searchContent; 
        if(this.state.searchContent){
            searchContent = this.state.searchContent
        }else{
            searchContent = 'no_content'
        }
        if(e.target.value !== ''){
            curentPages = 1;
        }
        const _url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/getCustomerRank?userid=1&flag=${e.target.value}&page=${curentPages}&limited=10&query=${searchContent}`;
        this.getTopData(_url,()=> {
            this.setState({ flag: e.target.value });
        });
        

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
                <Table columns={this.state.columns} filters={this.state.searchContent} dataSource={this.state.dataArr} onChange={this.handleTableChange} pagination={this.state.pagination} />
            </div>

        )
    }
}

module.exports = TopTable
