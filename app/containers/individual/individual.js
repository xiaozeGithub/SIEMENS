import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';


//引入tabs组件 
import SIETabs from '../../components/tabs/Tabs';
// 用电监测与分析
import Analyze from '../totalityAnalyze/totalityAnalyze';
class Individual extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            tabsArr:[
                {
                    title: '实时用电监测与分析',
                    index: '1',
                    url: '',
                    content:<Analyze/>
                },
                {
                    title: '历史用电',
                    index: '3',
                    url: '',
                    content:'历史用电'
                }
            ]
        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <SIETabs content={this.state.tabsArr}>

                </SIETabs>
            </div>
        )
    }
}

module.exports = Individual
