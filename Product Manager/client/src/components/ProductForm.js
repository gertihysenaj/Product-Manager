import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ setUpdate }) {

    const [product, setProduct] = useState({ title: '', price: '', description: '' });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
        .then(res => {
            setUpdate(update => !update);  
            setProduct({ title: '', price: '', description: '' });
        })
        .catch(err => console.log(err));
    };


    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h2 className="text-center mt-4 mb-4">Product Manager</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 d-flex bg-light p-3">
                            <label htmlFor="title" className="form-label me-3">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleChange} />
                        </div>
                        <div className="mb-3 d-flex bg-light p-3">
                            <label htmlFor="price" className="form-label me-3">Price</label>
                            <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} />
                        </div>
                        <div className="mb-3 d-flex bg-light p-3">
                            <label htmlFor="description" className="form-label me-3">Description</label>
                            <textarea className="form-control" id="description" name="description" value={product.description} onChange={handleChange} />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductForm;
