import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const handleFilter = () => {
        onFilter({ author, date, type });
    };

    return (
        <div className="flex space-x-4 p-4 bg-white rounded-lg shadow">
            <input
                type="text"
                placeholder="Author"
                className="w-1/3"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="date"
                className="w-1/3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select
                className="w-1/3"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">Type</option>
                <option value="news">News</option>
                <option value="blog">Blog</option>
            </select>
            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

export default Filters;
