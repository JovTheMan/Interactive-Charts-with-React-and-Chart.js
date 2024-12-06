import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
