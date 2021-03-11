import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
const ProductForm = (props) => {
    const {id} = props;
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const onSubmitHandler = e => {
        //e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            Title,
            Price,
            Description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            const filteredProducts = allProducts.filter((product) => product._id !== id);
            setAllProducts(filteredProducts);
            navigate(`/products`);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;