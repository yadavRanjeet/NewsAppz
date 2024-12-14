import React from 'react';
import Filters from '../../components/Filters/Filters';
import NewsTable from '../../components/News/NewsTable';
import Chart from '../../components/Charts/Chart';
import PayoutTable from '../../components/Payout/PayoutTable';

const Home = () => {
    const articles = []; // Mock articles data
    const payouts = [];  // Mock payouts data

    const handleFilter = (filterCriteria) => {
        console.log('Apply filters:', filterCriteria);
    };

    const handleUpdatePayout = (id, rate) => {
        console.log('Update payout rate:', { id, rate });
    };

    return (
        <div className="p-6 space-y-6">
            <Filters onFilter={handleFilter} />
            <Chart data={articles} />
            <NewsTable articles={articles} />
            <PayoutTable payouts={payouts} onUpdate={handleUpdatePayout} />
        </div>
    );
};

export default Home;

