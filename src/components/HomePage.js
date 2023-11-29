import React, { useState, useEffect } from 'react';
import CategoryPage from './CategoryPage';

const HomePage = () => {
  const [allPages, setAllPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of pages or components you want to render on the homepage
    // You can use Axios or any other method to fetch this data

    const fetchAllPages = async () => {
      try {
        // Simulating fetching pages
        const pages = [
          <CategoryPage />,
          // Add more pages or components as needed
        ];

        setAllPages(pages);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPages();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading pages: {error.message}</div>;
  }

  return (
    <div>
      <h2>Welcome to Prudent Scales Systems</h2>
      <div className="grid-container">
        {allPages.map((page, index) => (
          <div key={index}>{page}</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
