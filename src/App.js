import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loading-skeleton/dist/skeleton.css";
import { NavCom } from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';



const App = () => {

  return (
    <Router className='App'>
      <NavCom />
      <Routes>
      <Route path="/inStock-Store" element={<Home />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </Router>
  )
}

export default App