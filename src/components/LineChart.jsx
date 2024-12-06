import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Profits',
                data: data.profits,
                borderColor: 'rgba(54, 162, 235, 0.6)',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
