import React from 'react';

const NewsTable = ({ articles }) => {
    return (
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 border">Title</th>
                        <th className="p-4 border">Author</th>
                        <th className="p-4 border">Published At</th>
                        <th className="p-4 border">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="p-4 border">{article.title}</td>
                            <td className="p-4 border">{article.author || 'Unknown'}</td>
                            <td className="p-4 border">{new Date(article.publishedAt).toLocaleDateString()}</td>
                            <td className="p-4 border">{article.type || 'News'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsTable;
