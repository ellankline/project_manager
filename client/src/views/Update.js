import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'

const Update = (props) => {
    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then((res)=>{
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/' + id, {product}) // {
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    };

    return (
        <div>
            <h2>Update Product</h2>
            {loaded && (
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </div>
    )
}

export default Update;

