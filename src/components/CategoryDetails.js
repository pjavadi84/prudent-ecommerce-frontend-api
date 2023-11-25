import React from 'react';
import './category_details.css';

const CategoryDetails = ({ category, onClick }) => {
    return (
        <div className="category-container" onClick={() => onClick(category)}>
            <h3 className="category-name">{category.name}</h3>
            <div className="category-details">
                <div className="category-images">
                    {category.images && category.images.map((image, index) => (
                        <img key={index} src={image.url} alt={`${category.name}`} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CategoryDetails;
