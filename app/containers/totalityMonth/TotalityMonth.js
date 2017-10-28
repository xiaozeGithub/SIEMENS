import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar.js'
import '../../static/css/totalityMonth.css'
import Hint from '../../components/hint/Hint'

class Month extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            monthState: false
        }
    }
    monthStatus() {
        if (this.state.monthState) {
            return (
                <div style={{ height: '100%', width: '100%', paddingTop: '10px' }}>
                    <Hint />
                    <div className='monthTitle'>总体月购售电计划</div>

                    <img className='monthImg' src='../../../static/images/public/month.png'></img>
                    <p className='monthHint'>预测结果未发布</p>
                    <p className='monthHintContent'>预测结果会在每月19号左右发布, 19-22号之间可以修改</p>
                </div>
            )
        } else {
            return (
                <div style={{ height: '100%', width: '100%', paddingTop: '10px' }}>
                    <Hint />
                    <div className='monthTitle'>总体月购售电计划</div>

                    <img className='monthImg' src='../../../static/images/public/monthInput.png'></img>
                    <Row type="flex" justify="center" style={{ height: '50px',marginTop:'5px'}}>
                        <Col style={espectValue} span={3}>参考预测值:</Col>
                        <Col style={inputContainer} span={3}>
                            <input style={inputEspect}></input>
                        </Col>
                        <Col style={updata} span={2}>提交</Col>
                    </Row>
                    <p className='monthHintContent'>预测结果会在每月19号左右发布, 19-22号之间可以修改</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                {this.monthStatus()}
            </div>
        )
    }
}
// <EchartBar/>
module.exports = Month
const espectValue = {
    height: '100%',
    color: '#666',
    fontSize: '18px',
    lineHeight: '50px',
    textAlign: 'center'
}
const updata = {
    height: '100%',
    color: '#9b9b9b',
    fontSize: '16px',
    lineHeight: '50px',
    textAlign: 'center',
    cursor: 'pointer'
}
const inputContainer = {
    height: '100%'
}
const inputEspect = {
    height: '100%',
    width: '100%',
    fontSize: '18px',
    border:'2px solid #d8d8d8',
    borderRadius:'5px'
}