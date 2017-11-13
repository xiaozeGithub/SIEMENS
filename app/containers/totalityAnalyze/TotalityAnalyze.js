import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';

import EchartBar from '../../components/echarts/EchartBar'
import CompareElec from '../../components/echarts/CompareElec'
import ErrorUser from '../../components/echarts/Error'

import '../../static/css/totalityAnalyze.css'

// predictdaydata	Array(Integer)	预测电量（天）
// realdaydata	Array(Integer)	实际电量（天）
// predictweekdata	Array(Integer)	预测电量（周）
// realweekdata	Array(Integer)	实际电量（周）
// predicttenday	Integer	预测电量（10天）
// predicttwentyday	Integer	预测电量（20天）
// predictthirtyday	Integer	预测电量（30天）
// usedeachten_day	Integer	以十天为单位的实际电量（可能是10或20或30）
// used_data	Integer	本月已用电量
// today_data	Integer	今日用电量
// c_state	String	正常或警示（值：normal or unnormal）
// predictmonthdata	Integer	预测电量（月）
// m_customer	Array(M_Customer)	波动较大用户
class Analyze extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            errOrderby: [],
            compareObj: {},
            everyday:{
            },
            weekData:{}
        }
    }
    componentWillMount () {
            let that = this;
            const _url = 'http://192.168.0.103:8080/siemenspre_war_exploded/edata/getRealtimeAll?userId=1';
            fetch(_url, {
                method: 'GET'
            }).then(response => response.json()).then(values => {
                console.log(values);
                let getObj = values;
               
                let newArr = getObj.m_customer;
                newArr.filter(x => {
                    if (x.error < 0) {
                        x.status = 1
                        x.error = -x.error;
                        return x;
                    }else{
                        x.status = 0
                        return x;
                    }
                });
                newArr = newArr.sort((a, b) => {
                    return b.error - a.error;
                });
                that.setState({
                    errOrderby: newArr,
                    compareObj: {
                        predict_ten_day: getObj.predict_ten_day,
                        predict_twenty_day: getObj.predict_twenty_day,
                        predict_thirty_day: getObj.predict_thirty_day,
                        predict_month_data: getObj.predict_month_data,
                        used_data: getObj.used_data,
                        today_data: getObj.today_data,
                        lack_data:getObj.lack_data
                    },
                    everyday:{
                        title: '单体用户日用电量',
                        key:'day',
                        realBar:getObj.real_day_data,
                        predictBar:  getObj.predict_day_data ,
                        timeLine: getObj.day_amount,
                        type: 'bar'
                     },
                     weekData:{
                         title: '单体用户周用电量',
                         key:'week',
                         realBar: getObj.real_week_data,
                         predictBar: getObj.predict_week_data ,
                         timeLine: getObj.week_amount,
                         type: 'bar',
                         barWith:'5%'
                     }
                })
         
            });
            //     let newArr = values.m_customer.sort((a, b) => {
            //         return b.error - a.error;
            //     });
            //     console.log(newArr);
            //     // this.setState({
            //     //     errOrderby: newArr
            //     // })
            // let getObj = {
            //     "c_state": "normal",
            //     "m_customer": [{
            //         "customerName": "user1029351",
            //         "error": 13
            //     }, {
            //         "customerName": "user1029414",
            //         "error": -15
            //     }, {
            //         "customerName": "user1028978",
            //         "error": 18
            //     }, {
            //         "customerName": "user1029107",
            //         "error": 42
            //     }, {
            //         "customerName": "user1016529",
            //         "error": 59
            //     }],
            //     "predict_day_data": [3803939, 3938616, 4147689, 4177299, 4140199, 4142145, 4101365, 4159967, 4132947, 3998936, 3981450, 4045518, 4118816, 4139405, 4248187, 4303937, 3970223, 3915007, 4096716, 4091673, 3868238, 3779881, 3805459, 3752878, 3641166, 3499037, 3488311, 3498348, 3391937, 3415654, 3466747],
            //     "predict_month_data": 121261690,
            //     "predict_ten_day": 40743102,
            //     "predict_thirty_day": 121261690,
            //     "predict_twenty_day": 81654034,
            //     "predict_week_data": [11890244, 28852858, 28807536, 27309852],
            //     "real_day_data": [2897956, 3964078, 4740555, 4918931, 4880687, 4862623, 4531747, 4132565, 4551756, 4124876, 3516402, 3956424, 4382378, 3636170, 3880520],
            //     "real_week_data": [11602589, 32003185, 19371894],
            //     "today_data": 3880520,
            //     "used_data": 62977668
            // }

    }
    render() {

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>

                <div className='analyzeContainer' >

                    <Row className='analyzeHeader' type={'flex'} justify={'space-between'} >
                        <Col style={{ width: '72%', height: '100%', background: '#fff' }}>
                            <CompareElec content={this.state.compareObj} />
                        </Col>
                        <Col style={{ width: '27%', height: '100%', background: '#fff' }}>
                            <ErrorUser content={this.state.errOrderby} />
                        </Col>
                    </Row>
                    <div className='analyzeContent'>
                        <EchartBar content={this.state.everyday} />
                        <EchartBar content={this.state.weekData} />
                    </div>
                </div>
            </div>

        )
    }
}

// <EchartBar/>
module.exports = Analyze