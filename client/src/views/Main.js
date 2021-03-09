import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, []);

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm />
            <hr/>
            { loaded && <ProductList products ={products}/> }
        </div>
    )
}
export default Main;