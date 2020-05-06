import React, { Component } from 'react'
import Chart from './Charts'

export default class App extends Component {
    constructor() {
        super();
        //local state for data
        this.state = {
            chartData: {}
        }
    }
    //lifecycle hook
    componentWillMount() {
        this.getChartData();
    }
    getChartData = () => {
        this.setState({
            config: {
                title: {
                    text: 'Highcharts'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                }]
            }
        })
    }
    render() {
        return (
            <div>
                <Chart chartData={this.state.chartData} />
            </div>
        )
    }
}