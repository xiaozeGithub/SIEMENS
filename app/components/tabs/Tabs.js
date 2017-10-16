import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd'
import '../../static/css/tabs.css'
class SETabs extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            curTabs: '1',
            tabsArr: this.props.content,
            curContent: this.props.content[0].content
        }
    }
    tabBarChange = (item)=>{
        console.log(item.content)
        this.setState({
            curTabs:item.index,
            curContent: item.content
        });
    }
    render() {
        let that = this;
        return (
            <div className='tabContainer'>
                <div className='tabsHeader'>
                    <Row className='tabHeader'>
                        {
                            this.state.tabsArr.map(function (item) {
                                return (
                                    <Col onClick={that.tabBarChange.bind(this,item)} 
                                    className='tabItem' key={item.index}
                                     style={item.index == that.state.curTabs?
                                    {background: '#fff', backgroundSize: '100% 100%' ,color:'#666'}:{background: '#fafafa', backgroundSize: '100% 100%' }}span={3} >
                                        {item.title}
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <div className='tabsContent'>
                      {this.state.curContent}
                </div>
            </div>
        )
    }
}

module.exports = SETabs
