import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './category_details.css';

const CategoryDetails = ({ categories }) => {
  const { slug } = useParams(); // Access the slug from the URL
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(false); // Set loading to false since data is already provided via props
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading category: {error.message}</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No category details available</div>;
  }

  return (
    <div>
      <h3 className="category-name">{slug}</h3>
      <div className="category-details">
        {/* Map through categories and display details */}
        {categories.map((category, index) => (
          <div key={index} className="category-container">
            <h3 className="category-name">{category.name}</h3>
            <div className="category-images">
              {category.images && category.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image.url} alt={`${category.name}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
