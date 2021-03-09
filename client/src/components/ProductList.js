import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}><button onClick={() => navigate(`/products/${product._id}`)}>{product.Title}</button></p>
            })}
        </div>
    );
};

export default ProductList;