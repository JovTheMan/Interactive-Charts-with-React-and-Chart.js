import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Expenses vs. Profits',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
