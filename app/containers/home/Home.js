import React from 'react'
import { Link } from 'react-router'
import '../../static/css/home.css'
// import { hashHistory } from 'react-router'
import { Layout, Menu, Icon, Row, Col, Input, Dropdown } from 'antd'
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
            customerAllList: [],
            customerFavList: [],



        }
    }
    static contextTypes = { router: React.PropTypes.object };
    componentWillMount() {
        const userId = this.props.params.userId
        let _url = `http://192.168.0.103:8080/siemenspre_war_exploded/common/getCuslist?userId=${userId}&favourite=no`
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            let customerAllList = values;
            this.setState({
                customerAllListVTemp: customerAllList,
                customerAllList: customerAllList
            });
        });
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    changeFavHeartSatus(e, index) {
        e.stopPropagation();
        let curList = this.state.customerAllList;
        const curFavStatus = curList[index].favourite === 'yes' ? 'no' : 'yes';
        const customerId = curList[index].cId;
        let _url = `http://192.168.0.103:8080/siemenspre_war_exploded/common/updateCusFavourite?customerId=${customerId}&favourite=${curFavStatus}`
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            console.log(values);
            if(values.IsSuccess){
                this.setState({
                    customerAllList : curList
                });
            }
            // curList[index].favourite = curList[index].favourite === 'yes' ? 'no' : 'yes'
        });
      
        // fetch(_url, {
        //     method: 'GET'
        // }).then(response => response.json()).then(values => {
        //     //    重新排序
        //     values.m_customer.filter(x => {
        //         if (x.error < 0) {
        //             x.error = -x.error;
        //             (x.error);
        //             return x;
        //         }
        //     });
        this.state.customerAllList[index].favourite = curFavStatus;
        this.setState({
            customerAllList: this.state.customerAllList
        })

    }
    SearchCustomer(values) {
        let searchCusArr = this.state.customerAllListVTemp.filter(x => x['customerName'].indexOf(values) !== -1);
        this.setState({
            customerAllList: searchCusArr
        })
    }
    cansolApp() {
        console.log('goodBye');
        // let _url = 'http://192.168.0.106:8080/siemenspre_war_exploded/common/getCuslist?userId=1&favourite=no'
        // fetch(_url, {
        //     method: 'GET'
        // }).then(response => response.json()).then(values => {
        //     });
        this.context.router.push('/');
    }
    render() {
        const menu = <Menu>
            <Menu.Item >
                <div onClick={() => { this.cansolApp() }}> 退 出</div>
            </Menu.Item>
        </Menu>
        return (
            <Layout className="layout" style={{ height: '100%', background: this.context.color }}>
                <Header className="header">
                    <span>{Config.company}<i></i></span>
                    <div className='headerSetting'>
                        <div>{Config.login.title}</div>
                        <div>
                            <Icon style={{ fontSize: 24, color: '#999' }} type="android" />

                            <Dropdown overlay={menu}>
                                <span style={{ couser: 'pointer' }}>Administriter <Icon type="down" /></span>
                            </Dropdown>
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
                            style={{ width: 160, marginLeft: '20px', marginTop: '15px', color: '#ffffff' }}
                            onSearch={value => this.SearchCustomer(value)}
                        />
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['sub1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >

                            <Menu.Item key="sub1" ><Link style={{ display: 'block' }} to='/home'></Link><span><Icon type="user" />总体用电</span></Menu.Item>
                            <SubMenu title={<span><Icon type="laptop" />我关注的用户</span>}>
                                {
                                    this.state.customerAllList.map((item, index) => {
                                        if (item.favourite === 'yes') {
                                            return (
                                                <Menu.Item key={item.cId}><Icon type="heart" onClick={(e) => { this.changeFavHeartSatus(e, index) }} style={{ fontSize: 16, color: '#f07655' }} /> &nbsp;{item.customerName}</Menu.Item>
                                            )
                                        }

                                    })
                                }
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />所有用户</span>}>
                                {/*<Menu.Item key="9"><Link style={{ display: 'block' }} to='/home/individual'></Link>用户1</Menu.Item>*/}
                                {
                                    this.state.customerAllList.map((item, index) => {
                                        let iconStatus = item.favourite == 'yes' ? <Icon onClick={(e) => { this.changeFavHeartSatus(e, index) }} type="heart" style={{ fontSize: 16, color: '#f07655' }} /> : <Icon onClick={(e) => { this.changeFavHeartSatus(e, index) }} type="heart-o" style={{ fontSize: 16, color: '#f07655' }} />;
                                        return (
                                            <Menu.Item key={item.cId}>{iconStatus}  &nbsp; {item.customerName}</Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ padding: '8px 20px', overflow: 'auto', height: '100%' }}>
                            {this.props.children}
                        </Content>
                        <Footer className='footerSetting'>
                            <div style={{ margin: '5px 0', couser: 'pointer' }}>帮助中心 丨 关于西门子 丨 联系我们 丨 问题反馈</div>
                            <span>版权所有 ： 德国西门子股份有限公司 ©2017</span>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
module.exports = Home  