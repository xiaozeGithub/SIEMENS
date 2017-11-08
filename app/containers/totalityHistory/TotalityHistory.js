import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import '../../static/css/total_topten.css'
import HisTable from '../../components/table/historyTable'






class History extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        return (
            <div className='toptenContainer'>
                <HisTable/>
            </div>
        )
    }
}

module.exports = History