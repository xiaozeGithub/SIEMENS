import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar.js'



class Analyze extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
               <EchartBar/>
            </div>
        )
    }
}

module.exports = Analyze