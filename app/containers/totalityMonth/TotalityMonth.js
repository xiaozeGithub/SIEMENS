import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar.js'
import '../../static/css/totalityMonth.css'


class Month extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%',paddingTop:'10px' }}>
                <div className='monthTitle'>总体月购售电计划</div>
                <img className='monthImg' src='../../../static/images/public/month.png'></img>
                <p className='monthHint'>预测结果未发布</p>
                <p className='monthHintContent'>预测结果会在每月19号左右发布, 19-22号之间可以修改</p>
            </div>

        )
    }
}
// <EchartBar/>
module.exports = Month