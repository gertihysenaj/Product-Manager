import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import ProductEdit from './components/ProductEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


