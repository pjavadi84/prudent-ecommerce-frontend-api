import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CategoryDetails from './CategoryDetails';

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/category_module/categories');
                setCategories(response.data); // Assuming response.data is an array of categories
                debugger
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching categories", error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []); // Removed the dependency on categories

    const handleCategoryClick = (category) => {
        // Logic for what happens when a category is clicked
        console.log('Category clicked:', category);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories!</div>;

    return (
        <div>
            <h2>Home Page</h2>
            <div className="grid-container" >
                {categories.map((category) => (
                    <CategoryDetails 
                        key={category.id} 
                        category={category} 
                        onClick={handleCategoryClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
