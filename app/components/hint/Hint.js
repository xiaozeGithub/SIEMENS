import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col, Icon } from 'antd';

class Hint extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            msg: '修改数据成功',
            type: 'success'
            // msg: this.props.message
        }
    }

    render() {
        return (
            <div style={hintStyle}>
                <div style={hintContainer}>
                    <Icon style={{color:'#00b39e',fontSize: '18px'}} type="check-circle" />
                    <div style={{marginLeft: '10px'}}>{this.state.msg}</div>
                </div>
                 
                 <Icon className='closeRevole' style={{color:'#00b39e',fontSize: '18px'}} type="close" />
            </div>
        )
    }
}

module.exports = Hint

const hintStyle = {
    height: '34px', width: '50%',
    padding : '0 10px',
    position: 'absolute',
    background: '#ebf8f2',
    border: '1px solid #a7e1c4',
    borderRadius: '5px',
    left: '30%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  
}

const hintContainer = {
    height: '34px',
    display: 'flex',
    alignItems: 'center'
}