import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api')
            .then((res) => {
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err => {
                console.log(err);
            }))
    }, [])
    
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/' + id)
            .then((res) => {
                const deletedProduct = res.data;
                console.log(deletedProduct);
                const filteredProducts = allProducts.filter((product) => product._id !== id);
                setAllProducts(filteredProducts);
            })
    }
    return (
        <div>
            {allProducts.map((product, idx) => (
                    <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.Title}
                    </Link>
                    <br/>
                    <button onClick={(e)=>navigate(`/products/edit/${product._id}`)}>Edit</button>
                    <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
                    </p>
            ))}
        </div>
    );
};

export default ProductList;