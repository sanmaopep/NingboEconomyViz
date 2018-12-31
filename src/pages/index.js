import React from 'react';
import ReactEcharts from 'echarts-for-react';
import NingboGDP from '../../data/ningboGDP'

const getOption = () => {
  return {
    title: {
      text: '宁波GDP与增长率走势分析'
    },
    legend: {
      data: ['GDP', '增长率', '全国增长率']
    },
    grid: {
      right: '10%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: NingboGDP.map(i => i.year + '年')
    },
    yAxis: [
      {
        type: 'value',
        name: 'GDP',
        position: 'left',
        axisLabel: {
          formatter: '{value} 亿元'
        }
      },
      {
        type: 'value',
        name: '增长率',
        position: 'right',
        axisLabel: {
          formatter: '{value} %'
        }
      },
    ],
    series: [
      {
        name: "GDP",
        data: NingboGDP.map(i => i.gdp),
        type: 'bar'
      },
      {
        name: "增长率",
        yAxisIndex: 1,
        data: NingboGDP.map(i => i.rate),
        type: 'line'
      },
      {
        name: "全国增长率",
        yAxisIndex: 1,
        data: NingboGDP.map(i => i.national_rate),
        type: 'line'
      },
    ]
  }
}

export default function () {
  return <ReactEcharts
    style={{
      height: 500
    }}
    option={getOption()}
  />
}