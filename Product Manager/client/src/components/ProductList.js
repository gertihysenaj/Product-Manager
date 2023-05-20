import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList(props) {
    const {update, setUpdate} = props;
    const [products, setProducts] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
          .then(res => setProducts(res.data))
          .catch(err => console.log(err));
      }, [update]);


    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            
            setUpdate(update => !update);
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <hr />
                    <h2 >All Products:</h2>
                    {products.map(product => (
                        <div key={product._id}>
                            <h3><Link to={`products/${product._id}`}>{product.title}</Link></h3>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;

