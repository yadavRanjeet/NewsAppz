import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.author || 'Unknown'),
        datasets: [
            {
                label: 'Articles Count',
                data: data.map(() => Math.floor(Math.random() * 10)), // Example logic
                backgroundColor: 'rgba(37, 99, 235, 0.6)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Articles by Author',
            },
        },
    };

    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Article Trends</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Chart;
