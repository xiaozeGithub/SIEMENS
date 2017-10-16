import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '../../static/css/error.css'
class ErrorUser extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            userErroMsg: [
                {
                    name: '单体用户1',
                    electricityError: '76%',
                    electricityErrorNum: '55°'
                },
                {
                    name: '单体用户2',
                    electricityError: '60%',
                    electricityErrorNum: '45°'
                },
                {
                    name: '单体用户3',
                    electricityError: '46%',
                    electricityErrorNum: '30°'
                },
                {
                    name: '单体用户4',
                    electricityError: '30%',
                    electricityErrorNum: '18°'
                },
                {
                    name: '单体用户5',
                    electricityError: '20%',
                    electricityErrorNum: '10°'
                }
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
                        <span className='errorTitleStyle'>电量波动误差较大的用户</span>
                    </Col>
                    <Col className='errorColStyle flexRight' span={8}>
                        <span className='errorTitleLinkStyle'>用户排名</span>
                    </Col>
                </Row>
                {
                    this.state.userErroMsg.map(function (item) {
                        return (
                            <Row className='errorContent' type={'flex'} justify={'space-between'} >
                                <Col className='errorColStyle' span={6}>
                                    <span className='errorContentStyle'>{item.name}</span>
                                </Col>
                                <Col className='errorColStyle' span={18}>
                                    <div className='errorContentShow' style={{ width: item.electricityError }}></div>
                                    <div className='errorContentNumShow'>{item.electricityErrorNum}</div>
                                </Col>
                            </Row>
                        )
                    })
                }

            </div>
        );
    }
}

export default ErrorUser;