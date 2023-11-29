import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './category_details.css';
import CategoryDetails from './CategoryDetails';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/category_module/categories');
        setCategories(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  const handlescalescategory = (category) => {
    console.log("Category scales is being clicked");
    setSelectedCategory(category); // Set the selected category
  };

  return (
    <div>
      <div className="grid-container" onClick={() => handlescalescategory(categories)}>
        <div className="category-container">
          <h3>Scales</h3>
        </div>
      </div>

      {selectedCategory && <CategoryDetails categories={categories} />} {/* Render CategoryDetails conditionally */}
    </div>
  );
};

export default CategoryPage;
