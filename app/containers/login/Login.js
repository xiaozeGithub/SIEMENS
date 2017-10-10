import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import '../../static/css/login.css'
import NormalLoginForm from './NormalLoginForm'

import Config from '../../../config/config'




class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            Config,
        }
    }

    render() {
        return (
            <div className='wrap'>
                <Row>
                    <Col className='logo' span={4} offset={20}>{Config.company}</Col>
                </Row>
                <Row className='titleContainer'>
                    <Col className='title' span={8} offset={8}>用电预测与管理系统</Col>
                </Row>
                <Row className='titleContainer'>
                    <Col className='formContainer' span={8} offset={8}>
                        <NormalLoginForm/>
                    </Col>
                </Row>
            </div>
        )
    }
}

module.exports = LoginForm
