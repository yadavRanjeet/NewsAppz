import React from 'react';

const PayoutTable = ({ payouts, onUpdate }) => {
    const handleEdit = (id, value) => {
        onUpdate(id, value);
    };

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 border">Author</th>
                        <th className="p-4 border">Articles</th>
                        <th className="p-4 border">Payout Rate</th>
                        <th className="p-4 border">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {payouts.map((payout, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="p-4 border">{payout.author}</td>
                            <td className="p-4 border">{payout.articles}</td>
                            <td className="p-4 border">
                                <input
                                    type="number"
                                    value={payout.rate}
                                    onChange={(e) => handleEdit(payout.id, e.target.value)}
                                    className="border rounded p-2 w-full"
                                />
                            </td>
                            <td className="p-4 border">{payout.articles * payout.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayoutTable;
