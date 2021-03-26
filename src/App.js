import React from "react";
import Home from './Home';
import About from './About';
import Product from './Product';
import ProductDetails from './ProductDetails';
import {Routes,Route,Link, useNavigate} from "react-router-dom";
import ProductHome from "./ProductHome";



function NotFound(){
  return <div>Path Not Found</div>
}

export default function App() {
   const navigate = useNavigate();
  return(
    <div>
    <div>
        <Link to="/">Home</Link> {''}
        <Link to="about">About</Link> {''}
        <Link to="products">Product</Link> {' '}
        <Link to="/products/mobile">Mobile</Link> {' '}
        <Link to="/products/laptops">Laptops</Link>
        <Link to="*"></Link>
        <button onClick={()=>{
          navigate('/about');
        }}>Back To About</button>
     </div>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="products" element={<Product/>}>
           <Route path="/" element={<ProductHome/>}></Route>
           <Route path=":productId" element={<ProductDetails/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );}
