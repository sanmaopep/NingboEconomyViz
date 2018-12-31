import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = (title, data) => {
    return {
        title: {
            text: title,
            x: 'left'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['财政收支', '一般公共预算收入', '一般公共预算支出'],
            y: 'top',
            x: 'right'

        },
        xAxis: {
            type: 'category',
            axisTick: { show: false },
            data: data.district,
            offset: 20,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 亿元'
            },
        },
        series: [
            {
                name: "财政收支",
                type: 'bar',
                data: data.income.map((v, i) => Math.ceil(v - data.outcome[i]))
            },
            {
                name: "一般公共预算收入",
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: data.income
            },
            {
                name: "一般公共预算支出",
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'bottom'
                    }
                },
                data: data.outcome.map(v => -v)
            }
        ]
    }
}

export default function (props) {
    return <ReactEcharts
        style={{
            height: 500
        }}
        option={getOption(props.title, props.data)}
    />
}