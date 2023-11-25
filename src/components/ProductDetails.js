import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Render other product details as needed */}
        </div>
    );
};

export default ProductDetails;
