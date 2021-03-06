import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { hashHistory } from 'react-router'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const _url = 'http://192.168.0.103:8080/siemenspre_war_exploded/auth/login'
                fetch(_url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `userName=${values.userName}&password=${values.password}`
                }).then(response => response.json())
                .then(values => {
                    if (values.isSuccess) {
                        this.context.router.push(`/home/${values.userId}`);
                    }
                })
                .catch(e => console.log("Oops, error", e));

            }
        });
    }
    static contextTypes = { router: React.PropTypes.object };
    isSubmit = () => {
        // this.context.router.push('/home');  
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (!err) {
                const values = {
                    ...fieldsValue,
                    'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss')
                }
                this.context.getFormVal(values)
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

                    <div onClick={this.handleSubmit} style={{ marginTop: '16px' }} className='loginSubmit'>登 录</div>
                    <Row style={{ marginTop: '6px' }}>
                        <Col span={8}> <a className="login-form-forgot" href="">忘记密码</a></Col>
                        <Col style={{ textAlign: 'right' }} span={8} offset={8}>还没有账号？<a href="" style={{ color: '#47a1ea' }}>注册</a></Col>
                    </Row>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
module.exports = WrappedNormalLoginForm
