import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const DeleteButton = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const {id} = props;
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
    const deleteProduct = (props) => {
        axios.delete("http://localhost:8000/api/" + id)
            .then((res) => {
                const deletedProduct = res.data;
                console.log(deletedProduct);
                const filteredProducts = allProducts.filter((product) => product._id !== id);
                setAllProducts(filteredProducts);
            });
        navigate(`/products`);
    };

    return (
        <div>
        <button onClick={()=>deleteProduct(this.product._id)}>Delete</button>
        </div>
    )
};
export default DeleteButton;