import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsAsync } from '../../features/newsSlice';
import NewsTable from '../News/NewsTable';
import Chart from '../Charts/Chart';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { articles, loading } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchNewsAsync());
    }, [dispatch]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {loading ? <p>Loading...</p> : <Chart data={articles} />}
            <NewsTable articles={articles} />
        </div>
    );
};

export default Dashboard;
