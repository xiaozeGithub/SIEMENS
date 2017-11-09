import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import '../../utils/echartsSem';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

class EchartsBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {
                title: {
                    text: this.props.content.title,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['实际用电量', '预测用电量'],
                    x: 'right'
                },
                toolbox: {
                    show: true,
                    feature: {
                        // dataView: { show: true, readOnly: false },
                        // magicType: { show: true, type: ['line', 'bar'] },
                        // restore: { show: true },
                        saveAsImage: { show: true }
                    },
                    x: 'left'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: this.props.content.timeLine
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        data: ['50', '100', '150', '200']
                    }
                ],
                series: [
                    
                    {
                        name: '实际用电量',
                        type: this.props.content.type,
                        data: this.props.content.predictBar,
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        }
                        
                    },
                  
                    {
                        name: '预测用电量',
                        type: this.props.content.type,
                        data: this.props.content.realBar,
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        }
                        // markLine: {
                        //     data: [
                        //         { type: 'average', name: '平均值' }
                        //     ]
                        // }
                    }
                ]
            }
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echartBar'+this.props.content.key),'siemens');
        // 绘制图表
        myChart.setOption(this.state.data);
    }
    render() {
        return (
            <div id={"echartBar"+this.props.content.key} style={{ width: '100%', height: '100%' ,padding:'20px 20px 0 20px'}}></div>
        );
    }
}

export default EchartsBar;