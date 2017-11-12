import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '../../static/css/error.css'
class ErrorUser extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            userErroMsg: this.props.content
        }
    }
    componentDidUpdate() {
     
        let errObj = this.state.userErroMsg;
        if(errObj<=0){
            
                    }
        console.log(errObj);
        let maxError = errObj[0].error;

        errObj = errObj.map(function (item,index) {
            item.electricityError =  (item.error/maxError) * 76+'%'
        });
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
                    {
                        // item.electricityError
                    }
                </Row>
                {
                    this.state.userErroMsg.map(function (item, index) {
                        return (
                            <Row key={index} className='errorContent' type={'flex'} justify={'space-between'} >
                                <Col className='errorColStyle' span={6}>
                                    <span className='errorContentStyle'>{item.customerName}</span>
                                </Col>
                                <Col className='errorColStyle' span={18}>
                                    <div className='errorContentShow' style={{ width: item.electricityError}}></div>
                                    <div className='errorContentNumShow'>{item.error+'kwh'}</div>
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