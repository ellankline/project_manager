import React from 'react';


const ProductDetail = (props) => {
    return (
        <div>
            {props.products.map = (product, idx) => {
                return <p key={idx}>{product._id}, {product.Title}, {product.Price}, {product.Description}</p>
                
                }}
        </div>
    );
};

export default ProductDetail;