import React from 'react'
import { Select, Row, Col } from 'antd';
const Option = Select.Option;

import '../../static/css/selectTime.css'




class SelectTime extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            startTimeList: this.props.timeSelect,
            startTimeIndex: '0',
            endTimeIndex: '0'
        }
    }
    handleEndChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            endTimeIndex: value
        })
    }
     handleStartChange = (value) => {
        this.setState({
            startTimeIndex: value
        })
    }
    searchTime(str, end){
        this.props.searchTime(str, end)
    }
    
    render() {
        return (
            <Row gutter={8} style={{width:'100%'}}>
                <Col span={8}>
                    <Select defaultValue={this.state.startTimeList[0]} style={{ width: '100%' }} onChange={this.handleStartChange}>
                        {
                            this.state.startTimeList.map(function (item,index) {
                                return (
                                    <Option key={item} value={index+''}>{item}</Option>
                                )
                            })
                        }
                    </Select>
                </Col>
                <Col span={2}>
                    <div className='selectTimeTo' >——</div>
                </Col>
                <Col span={8}>
                    <Select defaultValue={this.state.startTimeList[0]} style={{ width: '100%' }} onChange={this.handleEndChange}>
                    {
                        this.state.startTimeList.map(function (item, index) {
                            return (
                                <Option key={item} value={index+''}>{item}</Option>
                            )
                        })
                    }
                    </Select>
                </Col>
                <Col span={6}>
                     <div onClick={(str, end) => this.searchTime(this.state.startTimeIndex, this.state.endTimeIndex)} className='selectTimeBtn' >查询</div>
                </Col>
            </Row>
        )
    }
}

module.exports = SelectTime