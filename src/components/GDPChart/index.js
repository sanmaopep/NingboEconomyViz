import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = (city, data) => {
    return {
        title: {
            text: city + 'GDP与增长率走势分析'
        },
        legend: {
            data: ['GDP', '第一产业', '第二产业', '第三产业', '增长率',],
            y: 'bottom',
        },
        grid: {
            right: '15%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            data: data.year,
            axisLabel: {
                formatter: '{value}年'
            }
        },
        yAxis: [
            {
                type: 'value',
                name: 'GDP',
                position: 'right',
                axisLabel: {
                    formatter: '{value} 亿元'
                },
            },
            {
                type: 'value',
                name: '增长率',
                position: 'left',
                axisLabel: {
                    formatter: '{value} %'
                }
            },
        ],
        series: [
            {
                name: "GDP",
                data: data.gdp,
                type: 'bar'
            },
            {
                name: "第一产业",
                data: data.gdp1,
                type: 'bar'
            },
            {
                name: "第二产业",
                data: data.gdp2,
                type: 'bar'
            },
            {
                name: "第三产业",
                data: data.gdp3,
                type: 'bar'
            },
            {
                name: "增长率",
                yAxisIndex: 1,
                smooth: true,
                data: data.rate,
                type: 'line'
            },
        ]
    }
}

export default function (props) {
    return <ReactEcharts
        style={{
            height: 500
        }}
        option={getOption(props.city, props.data)}
    />
}