import React from 'react'


import { Table, Icon, Button, Radio, Input } from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'
import SelectTime from '../selectTime/SelectTime'




class TopTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns: this.props.columns,
            data: this.props.data,
            timeSpace: this.props.timeSpace
        }
    }

    searchTime(str, end) {
        let tempObj = Array.from(this.state.timeSpace);
        // Object.assign(tempObj, this.state.timeSpace);
        // console.log(tempObj);
        // tempObj = Array.from(tempObj);
        // console.log(tempObj);
        
        let strIndex = tempObj.findIndex((item) => item['key'] == str);
        let endIndex = tempObj.findIndex((item) => item['key'] == end)+1;
        if(strIndex - endIndex <= 0){
            let spliceArr = tempObj.splice(strIndex, endIndex);
            this.setState({
                data: spliceArr
            })
        }else{
            console.log('请输入正确的区间')
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
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>

        )
    }
}

module.exports = TopTable