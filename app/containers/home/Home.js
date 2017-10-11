import React from 'react'
import { Link } from 'react-router'
import '../../static/css/home.css'

import { Layout, Menu, Icon, Row, Col, Input  } from 'antd'
import Config from '../../../config/config'

const Search = Input.Search;
// 引入遮罩层

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Header, Content, Footer, Sider } = Layout

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            siderArr: [
                { title: '总体用电', key: 1, link: '/home' },
                { title: '我关注的用户', key: 2, link: '/' },
                { title: '所有用户', key: 3, link: '/' },
            ]
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }


    shadeTemplate = (template) => {
        this.setState({
            shadeTemplate: template
        });
    }
    render() {
        return (
            <Layout className="layout" style={{ height: '100%', background: this.context.color }}>
                <Header className="header">
                    <span>{Config.company}<i></i></span>
                    <div className='headerSetting'>
                        <div>{Config.login.title}</div>
                        <div>
                           <Icon style={{ fontSize: 24, color: '#999' }} type="android" />
                           <span>Administriter</span>
                           <Icon style={{ fontSize: 14, color: '#999' }} type="down" />
                        </div>
                    </div>
                </Header>

                <Layout>
                
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        width='200'
                        style={{ background: '#4a515d', fontSize: '14px' }}
                    >
                        <Search
                            placeholder="input search text"
                            style={{ width: 160,marginLeft:'20px',marginTop:'15px'  }}
                            onSearch={value => console.log(value)}
                        />
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                          
                            <Menu.Item key="sub1" ><span><Icon type="user" />总体用电</span></Menu.Item>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />我关注的用户</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />所有用户</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ padding: '8px 20px', overflow: 'auto',height: '100%'}}>
                            {this.props.children}
                        </Content>
                        <Footer className='footerSetting'>
                            <div style={{ margin: '5px 0' ,couser: 'pointer'}}>帮助中心 丨 关于西门子 丨 联系我们 丨 问题反馈</div>
                            <span>版权所有 ： 德国西门子股份有限公司 ©2017</span>
			             </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
module.exports = Home  