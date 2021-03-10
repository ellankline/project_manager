import React, { useEffect, useState, useFindAndModify } from 'react';
import axios from 'axios';

const Update = (props) => {
    const {id} = props;
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then((res)=>{
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/' + id, {
            Title,
            Price,
            Description
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br/>
                    <input type="text"
                    name="title"
                    value={Title}
                    onChange={(e) => {setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price</label>
                    <br/>
                    <input type="text"
                    name="price"
                    value={Price}
                    onChange={(e) => {setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description</label>
                    <br/>
                    <input type="text"
                    name="description"
                    value={Description}
                    onChange={(e) => {setDescription(e.target.value)}} />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;