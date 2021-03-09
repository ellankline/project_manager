import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Detail = (props) => {
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    return (
        <div>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
        </div>
    )
};

export default Detail;