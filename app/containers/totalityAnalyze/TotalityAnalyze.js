import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar'
import CompareElec from '../../components/echarts/CompareElec'
import ErrorUser from '../../components/echarts/Error'

import '../../static/css/totalityAnalyze.css'


class Analyze extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>

                <div className='analyzeContainer' >

                    <Row className='analyzeHeader' type={'flex'} justify={'space-between'} >
                        <Col style={{ width: '72%', height: '100%', background: '#fff' }}>
                            <CompareElec />
                        </Col>
                        <Col style={{ width: '27%', height: '100%', background: '#fff' }}>
                            <ErrorUser />
                        </Col>
                    </Row>
                    <div className='analyzeContent'>
                        <EchartBar />

                    </div>
                </div>
            </div>

        )
    }
}
// <EchartBar/>
module.exports = Analyze