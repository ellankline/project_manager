import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";


const Detail = (props) => {
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/' + id)
            .then((res) => {
                const deletedProduct = res.data;
                console.log(deletedProduct);
            });
            navigate(`/products`);
    };

    return (
        <div>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
            <br/>
            <button onClick={(e)=>deleteProduct(product._id) }>Delete</button>
        </div>
    )
};

export default Detail;