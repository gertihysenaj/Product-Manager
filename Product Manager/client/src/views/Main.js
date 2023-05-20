import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


function Main() {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);



  return (
    <div>
        <ProductForm setUpdate={setUpdate} update={update} />
        <ProductList products={products} setProducts={setProducts} update={update} setUpdate={setUpdate} />

    </div>
  );
}

export default Main;

