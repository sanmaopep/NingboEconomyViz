import React from 'react';
import ReactEcharts from 'echarts-for-react';


const getOption = (title, data) => {
    const gdps = data.gdp.map((gdp, index) => ({
        name: data.district[index],
        value: gdp
    }))
    console.log(gdps)
    return {
        title: {
            text: title,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            data: data.district,
            x: 'right',
            y: 'bottom',
            width: 200
        },
        series: [
            {
                name: "各县区数据",
                type: 'pie',
                radius: [20, 110],
                center: ['50%', '50%'],
                roseType: 'radius',
                data: gdps
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