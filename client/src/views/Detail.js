import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";


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
            })
    }

    return (
        <div>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
            <br/>
            <Link to="/products" onClick={(e)=>deleteProduct(product._id) }>Delete</Link>
        </div>
    )
};

export default Detail;