import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
  }, []);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="text-center">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate(`/edit/${id}`)} className="btn btn-secondary me-2">Edit</button>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default ProductDetails;


