import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsAsync } from '../../features/newsSlice';
import NewsTable from '../../components/News/NewsTable';

const Home = () => {
    const dispatch = useDispatch();
    const { articles, loading, error } = useSelector((state) => state.news);

    const [category, setCategory] = useState('health'); // Default category
    const [countryCode, setCountryCode] = useState('in'); // Default country

    useEffect(() => {
        dispatch(fetchNewsAsync({ category, countryCode }));
    }, [dispatch, category, countryCode]);

    return (
        <div className="home p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">News Dashboard</h1>
            <div className="flex justify-center mb-6 gap-4">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                </select>
                <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    <option value="in">India</option>
                    <option value="us">USA</option>
                    <option value="gb">UK</option>
                    <option value="au">Australia</option>
                </select>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <NewsTable articles={articles} />
        </div>
    );
};

export default Home;
