import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`, product)
      .then(res => {
        console.log(res.data);
        navigate('/'); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Edit Product</h2>
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
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;

