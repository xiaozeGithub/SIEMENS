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
    static defaultProps = {
        content:[]
    }
    componentWillReceiveProps(nextProps){
       
    }
    componentDidMount() {
       
    }
    render() {
        return (
            <div className='errorContainer' style={{padding:'25px',flexDirection: 'row',justifyContent:'space-between'}}>
                <div style={{width:'66%',height:'100%'}}>
                    <div  style={{width:'100%',height:'50%',display:'flex',alignItems:'center',borderBottom:'1px solid #e4e4e4'}}>
                        <div  style={{width:'50%',height:'60%',borderRight:'1px solid #e4e4e4'}}>
                                <div  style={{fontSize:'20px',textAlign:'center'}}>666°</div>
                                <span style={{fontSize:'12px',display:'inline-block',width:'100%',textAlign:'center',color:'#b8b8b8'}}>本月已用电</span>
                        </div>
                        <div  style={{width:'50%',height:'60%'}}>
                                <div  style={{fontSize:'20px',textAlign:'center'}}>666°</div>
                                <span style={{fontSize:'12px',display:'inline-block',width:'100%',textAlign:'center',color:'#b8b8b8'}}>本月已用电</span>
                        </div>
                    </div>
                    <div  style={{width:'100%',height:'50%',display:'flex',alignItems:'center',borderTop:'1px solid #e4e4e4'}}>
                        <div  style={{width:'50%',height:'60%',borderRight:'1px solid #e4e4e4'}}>
                                <div  style={{fontSize:'20px',textAlign:'center'}}>666°</div>
                                <span style={{fontSize:'12px',display:'inline-block',width:'100%',textAlign:'center',color:'#b8b8b8'}}>本月已用电</span>
                        </div>
                        <div  style={{width:'50%',height:'60%'}}>
                                <div  style={{fontSize:'20px',textAlign:'center'}}>666°</div>
                                <span style={{fontSize:'12px',display:'inline-block',width:'100%',textAlign:'center',color:'#b8b8b8'}}>本月已用电</span>
                        </div>
                    </div>
                </div>
                <div style={{width:'30%',height:'100%',background:'#f9f9f9',padding:'15px'}}>
                    <div style={{fontSize:'14px',color:'#666'}}>建议：</div>
                    <p style={{fontSize:'12px',color:'#b8b8b8'}}>放心大胆用吧</p>
                </div>
            </div>
        );
    }
}

export default ErrorUser;