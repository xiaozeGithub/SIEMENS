import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar.js'
import '../../static/css/totalityMonth.css'
import Hint from '../../components/hint/Hint'

class Month extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            monthState: false,
            monthArr: [19, 20, 21,22,23,24,25,26,27,28,29,30,31],
            isSetting:true,
            inputStatus: true,
            expectVal: 2345,
            inputVal: '',
            hint: false,
            hintContent: {},
            firstLine : [],
            thirdLine:[],
            fourthLine:[],
            secondLine:[]
        }
    }
    componentDidMount() {
        let that = this;
        const _url = 'http://192.168.0.103:8080/siemenspre_war_exploded/edata/getPredict?userId=1';
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            console.log(typeof values.first_line);
            that.setState({
                firstLine: values.first_line,
                secondLine: values.second_line,
                thirdLine: values.third_line,
                fourthLine: values.fourth_line,
                expectVal: values.total_predict_data
            })
        });
        let myDate = new Date(), monthState;
        let curData = myDate.getDate(); //获取当前日(1-31)
        curData = 22
        if(curData > 22){
            this.setState({
                isSetting: false
            })    
        }
        ~this.state.monthArr.indexOf(curData) ? monthState = true : monthState = false;
        this.setState({
            monthState
        })
    }
    changeExpectVal() {
        this.setState({
            inputStatus: false
        });
    }
    changeVal(e) {
        this.setState({
            inputVal: e.target.value
        });
    }
    submitVal() {
        let inputVal = this.state.inputVal;
        if (inputVal && parseInt(inputVal) == inputVal) {
            // 如果是数字 并且大于0
            
            const _url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/updatePredict?id=1&predictData=${inputVal}`;
            console.log(_url);
            fetch(_url, {
                method: 'GET'
            }).then(response => response.json()).then(values => {
                console.log(values);
                this.setState({
                    expectVal : values.total_predict_data,
                    firstLine: values.first_line,
                    secondLine: values.second_line,
                    thirdLine: values.third_line,
                    fourthLine: values.fourth_line,
                    inputStatus: true,
                    hint: true,
                    hintContent: {
                        type: 'success',
                        text: '修改数据成功'
                    }
                })
            });
        } else {
            this.setState({
                hint: true,
                hintContent: {
                    type: 'fail',
                    text: '请输入数字'
                }
            });
        }
        let timer = setTimeout(() => {
            this.setState({
                hint: false,
            }, () => { clearTimeout(timer) });
        }, 1500);
    }
    reSetVal() {
        // 如果是数字 并且大于0
        // fetch(_url, {
        //     method: 'GET'
        // }).then(response => response.json()).then(values => {
        //     }); 

        const _url = `http://192.168.0.103:8080/siemenspre_war_exploded/edata/undoPredictionChange?id=1`;
        console.log(_url);
        fetch(_url, {
            method: 'GET'
        }).then(response => response.json()).then(values => {
            console.log(values);
            this.setState({
                expectVal : values.total_predict_data,
                firstLine: values.first_line,
                secondLine: values.second_line,
                thirdLine: values.third_line,
                fourthLine: values.fourth_line,
                inputStatus: true,
                hint: true,
                hintContent: {
                    type: 'success',
                    text: '修改数据成功'
                }
            })
        });
        let timer = setTimeout(() => {
            this.setState({
                hint: false,
            }, () => { clearTimeout(timer) });
        }, 1500);

    }
    monthStatus() {
        if (!this.state.monthState) {
            return (
                <div style={{ height: '100%', width: '100%', paddingTop: '10px' }}>

                    <div className='monthTitle'>总体月购售电计划</div>

                    <img className='monthImg' src='../../../static/images/public/month.png'></img>
                    <p className='monthHint'>预测结果未发布</p>
                    <p style={{paddingBottom:'15px'}} className='monthHintContent'>预测结果会在每月19号左右发布, 19-22号之间可以修改</p>
                </div>
            )
        } else {
            return (
                <div style={{ height: '100%', width: '100%', paddingTop: '10px' }}>

                    <div className='monthTitle'>总体月购售电计划</div>

                    <img className='monthImg' src='../../../static/images/public/monthInput.png'></img>
                    <Row type="flex" justify="center" style={{ height: '50px', marginTop: '5px' }}>
                        <Col style={espectValue} span={3}>参考预测值:</Col>
                        <Col style={inputContainer} span={3}>
                            {
                                !this.state.inputStatus ?
                                    <input onChange={(e) => { this.changeVal(e) }} style={inputEspect}></input> :
                                    <div style={inputEspectShow} >{this.state.expectVal}</div>
                            }
                        </Col>
                        {
                            this.state.inputStatus&&this.state.isSetting ? <Col onClick={() => { this.reSetVal() }} style={updata} span={2}>恢复默认</Col> : ''
                        }
                        {
                            this.state.inputStatus&&this.state.isSetting ?
                                <Col style={updata} onClick={() => { this.changeExpectVal() }} span={2}>修改</Col>
                                :this.state.isSetting? <Col style={updata} onClick={() => { this.submitVal() }} span={2}>提交</Col>:''
                        }

                    </Row>
                    <p  style={{paddingBottom:'15px'}} className='monthHintContent'>预测结果会在每月19号左右发布, 19-22号之间可以修改</p>
                    <div style={{ height: '40%', width: '100%', paddingTop: '1%', background: '#f2f2f2' }}>
                        <div style={{ height: '95%', width: '100%', paddingTop: '10px', background: '#fff', paddingLeft: '15px' }}>
                            <div style={{ height: '10%', width: '100%', color: '333', fontSize: '14px' }}>单体月售电计划</div>
                            <Row style={{ height: '80%', width: '100%' }}>

                                <Col style={{ height: '100%', paddingTop: '10px', background: '#fff', overflow: 'scroll', borderRight: '1px solid #e6e6e6' }} span={6}>
                                    {this.state.firstLine.map((item, index) => {
                                        return(
                                            <span key={index} style={{ display: 'inline-block', height: '15%', width: '100%', color: '999', fontSize: '12px', textAlign: 'left',paddingLeft:'15%',paddingRight:'15%',display:'flex',justifyContent:'space-between' }}><span style={{flex:'1'}}>{item.customerName} </span><span style={{flex:'1'}}>{item.predictData}kwh</span></span>
                                        )
                                    })}
                                    
                                  </Col>
                                <Col style={{ height: '100%', paddingTop: '10px', background: '#fff', overflow: 'scroll', borderRight: '1px solid #e6e6e6' }} span={6}>
                                {this.state.secondLine.map((item, index) => {
                                    return(
                                        <span key={index} style={{ display: 'inline-block', height: '15%', width: '100%', color: '999', fontSize: '12px', textAlign: 'left',paddingLeft:'15%',paddingRight:'15%',display:'flex',justifyContent:'space-between' }}><span style={{flex:'1'}}>{item.customerName} </span><span style={{flex:'1'}}>{item.predictData}kwh</span></span>
                                    )
                                })}
                                </Col>
                                <Col style={{ height: '100%', paddingTop: '10px', background: '#fff', overflow: 'scroll', borderRight: '1px solid #e6e6e6' }} span={6}>
                                {this.state.thirdLine.map((item, index) => {
                                    return(
                                        <span key={index} style={{ display: 'inline-block', height: '15%', width: '100%', color: '999', fontSize: '12px', textAlign: 'left',paddingLeft:'15%',paddingRight:'15%',display:'flex',justifyContent:'space-between' }}><span style={{flex:'1'}}>{item.customerName} </span><span style={{flex:'1'}}>{item.predictData}kwh</span></span>
                                    )
                                })}
                                </Col>
                                <Col style={{ height: '100%', paddingTop: '10px', background: '#fff', overflow: 'scroll' }} span={6}>
                                {this.state.fourthLine.map((item, index) => {
                                    return(
                                        <span key={index} style={{ display: 'inline-block', height: '15%', width: '100%', color: '999', fontSize: '12px', textAlign: 'left',paddingLeft:'15%',paddingRight:'15%',display:'flex',justifyContent:'space-between' }}><span style={{flex:'1'}}>{item.customerName} </span><span style={{flex:'1'}}>{item.predictData}kwh</span></span>
                                    )
                                })}
                                </Col>

                            </Row>
                        </div>

                    </div>

                </div>
            )
        }
    }

    render() {

        return (
            <div style={{ height: '100%', width: '100%' }}>
                {this.state.hint ? <Hint content={this.state.hintContent} /> : ''}

                {this.monthStatus()}
            </div>
        )
    }
}
// <EchartBar/>
module.exports = Month
const espectValue = {
    height: '100%',
    color: '#666',
    fontSize: '18px',
    lineHeight: '50px',
    textAlign: 'center'
}
const updata = {
    height: '100%',
    color: '#91afe5',
    fontSize: '16px',
    lineHeight: '50px',
    textAlign: 'center',
    cursor: 'pointer'
}
const inputContainer = {
    height: '100%'
}
const inputEspect = {
    height: '100%',
    width: '100%',
    fontSize: '18px',
    border: '2px solid #d8d8d8',
    borderRadius: '5px'
}
const inputEspectShow = {
    height: '100%',
    width: '100%',
    fontSize: '26px',
    lineHeight: '50px',
    textAlign: 'center',
    color: '#666'
}