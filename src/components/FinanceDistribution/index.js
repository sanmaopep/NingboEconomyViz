import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = (title, data) => {
    return {
        title: {
            text: title,
            x: 'center'
        },
        tooltip: {
            show: true,
            formatter: "{b} : {c} 亿元"
        },
        legend: {
            y: 'bottom',
        },
        series: [
            {
                type: 'treemap',

                data: data
            },

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