import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar.js'
import '../../static/css/totalityAnalyze.css'


class Analyze extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' ,display:'flex'}}>
                <div className='analyzeContainer' >
                    <div className='analyzeHeader'></div>
                    <div className='analyzeContent'></div>
                </div>
            </div>

        )
    }
}
// <EchartBar/>
module.exports = Analyze