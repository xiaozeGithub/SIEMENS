import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '../../static/css/eleCompare.css'
class CompareElec extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            compareMsg: [

            ]
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className='errorContainer'>

                <Row className='errorHeader' type={'flex'} justify={'space-between'} >
                    <Col className='errorColStyle' span={16}>
                        <span className='errorTitleStyle'>本月电量对比</span>
                    </Col>
                    <Col className='errorColStyle flexBetween' span={8}>
                        <div className='compareOption'>预测</div>
                        <div className='compareOption'>正常</div>
                        <div className='compareOption'>警示</div>
                    </Col>
                </Row>
                <Row style={compareGraph}>
                    <Col style={compareGraphCol} span={20}>
                        <div className="eleCompare">
                            <div className="top">
                                <span>333°</span>
                                <span>556°</span>
                                <span>888°</span>
                            </div>
                            <div className="mid">
                                <span className="one">
                                    <span className="two">188°</span>
                                </span>
                            </div>
                            <div className="bottom">
                                <span><span className="time">时间</span><span className="day">10天</span><i></i></span>
                                <span className="day">20天<i></i></span>
                                <span className="day">30天<i></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col style={compareGraphColR} span={4}>
                        <div style={compareGraphColRContent} ><span style={{ color: '#d7d7d7' }}>本月已用电量</span> <span> 666°</span></div>
                        <div style={compareGraphColRContent}><span style={{ color: '#d7d7d7' }}>本月已用电量</span>  <span> 886°</span></div>
                        <div style={compareGraphColRContent}><span style={{ color: '#d7d7d7' }}>今日用电量</span>  <span> 66°</span></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CompareElec;
const compareGraph = {
    height: '74%',
}
const compareGraphCol = {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
}
const compareGraphColR = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

}
const compareGraphColRContent = {
    display: 'flex',
    width: '90%',
    lineHeight: '22px',
    justifyContent: 'space-between',
}