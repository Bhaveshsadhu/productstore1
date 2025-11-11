import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h5 className="product-title">{name}</h5>
                <p className="product-description">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
