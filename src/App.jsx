import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data/financial_data.json')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Dynamic Chart Dashboard</h1>
            <BarChart data={data} />
            <LineChart data={data} />
            <ScatterChart data={data} />
            <BubbleChart data={data} />
        </div>
    );
};

export default App;

