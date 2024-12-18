import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Sales, Profits, Expenses',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                    r: data.sales[index] / 100, // Scale bubble size
                })),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
