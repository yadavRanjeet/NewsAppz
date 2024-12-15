import React, { useState } from 'react';

const NewsTable = ({ articles }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (startIndex + itemsPerPage < filteredArticles.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1); // Reset to the first page when searching
    };

    return (
        <div className="shadow-lg rounded-lg bg-white p-6">
            <div className="flex flex-col items-center mb-6 space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
                        style={{ width: '300px' }}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Search
                    </button>
                </div>
            </div>
            <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 border">Title</th>
                        <th className="p-4 border">Source</th>
                        <th className="p-4 border">Published At</th>
                        <th className="p-4 border">Author</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {currentArticles.map((article, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="p-4 border">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 visited:text-purple-600 hover:underline"
                                >
                                    {article.title}
                                </a>
                            </td>
                            <td className="p-4 border">{article.source?.name || 'Unknown'}</td>
                            <td className="p-4 border">{new Date(article.publishedAt).toLocaleDateString()}</td>
                            <td className="p-4 border">{article.author || 'Unknown'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6 flex justify-between">
                <button
                    onClick={handlePreviousPage}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <button
                    onClick={handleNextPage}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    disabled={startIndex + itemsPerPage >= filteredArticles.length}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default NewsTable;
