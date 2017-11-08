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
        super(props, context)
        this.state = {
            data: {
                title: {
                    text: '某地区蒸发量和降水量'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['蒸发量', '降水量']
                },
                toolbox: {
                    show: true,
                    feature: {
                        // dataView: { show: true, readOnly: false },
                        // magicType: { show: true, type: ['line', 'bar'] },
                        // restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '蒸发量',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: '降水量',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }
                ]
            }
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echartBar'),'siemens');
        // 绘制图表
        myChart.setOption(this.state.data);
    }
    render() {
        return (
            <div id="echartBar" style={{ width: '100%', height: '100%' }}></div>
        );
    }
}

export default EchartsBar;