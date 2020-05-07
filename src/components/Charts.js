import React from 'react'
import Data from './data/data.json'
import ReactHighcharts from 'react-highcharts';
class Chart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state =
            {
                chartData:
                {
                    chart: {
                        zoomType: 'xy',
                        type: 'line'
                    },
                    title: {
                        text: 'charts',
                        align: 'left'
                    },
                    colors: ['lightblue', 'red',],
                    credits: {
                        // enabled:false,
                        text: 'code',
                        href: 'https://github.com/divyansh1234/Tellius-Dashboard',
                        // position:{
                        //     align:'left',
                        //     x:-100,

                        // },
                        // style:{
                        //     fontSize:"15px",
                        //     color:"red"
                        // }

                    },
                    xAxis: [{
                        categories: [...Data.map(i => i.date_time)],
                        crosshair: true
                    }],

                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                        },
                        title: {
                            text: 'Temperature',
                        },
                        opposite: true

                    }, { // Secondary yAxis
                        gridLineWidth: 0,
                        title: {
                            text: 'humidity',
                        },
                        labels: {
                            format: '{value} mm',
                        }

                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 80,
                        verticalAlign: 'top',
                        y: 55,
                        floating: true
                    },
                    series: [{
                        name: 'humidity',
                        type: 'column',
                        yAxis: 1,
                        data: [...Data.map(i => i.env_humidity)],
                        tooltip: {
                            valueSuffix: ' mm'
                        }

                    }, {
                        name: 'Temperature',
                        type: 'spline',
                        data: [...Data.map(i => i.env_temp)],
                        tooltip: {
                            valueSuffix: ' °C'
                        }
                    }],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    floating: false,
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom',
                                    x: 0,
                                    y: 0
                                },
                                yAxis: [{
                                    labels: {
                                        align: 'right',
                                        x: 0,
                                        y: -6
                                    },
                                    showLastLabel: false
                                }, {
                                    labels: {
                                        align: 'left',
                                        x: 0,
                                        y: -6
                                    },
                                    showLastLabel: false
                                }, {
                                    visible: false
                                }]
                            }
                        }]
                    }
                }


            }
        console.log(Object.keys(this.state["chartData"]))
    }

    render() {
        const config = this.state.chartData;
        console.log(config)
        return (
            <div className="container">
                <ReactHighcharts config={config} />
            </div>

        )
    }

}
export default Chart