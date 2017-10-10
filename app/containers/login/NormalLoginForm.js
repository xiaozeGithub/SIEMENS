import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input style={{ marginBottom: '26px' }} prefix={<Icon type="user" style={{ fontSize: 18 }} />} placeholder="Username" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 18 }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                        )}

                    <div style={{ marginTop: '16px' }} className='loginSubmit'>登 录</div>
                    <Row style={{ marginTop: '6px' }}>
                        <Col span={8}> <a className="login-form-forgot" href="">忘记密码</a></Col>
                        <Col style={{textAlign: 'right'}} span={8} offset={8}>还没有账号？<a href="" style={{color: '#47a1ea'}}>注册</a></Col>
                    </Row>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
module.exports = WrappedNormalLoginForm
