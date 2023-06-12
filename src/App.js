import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Products from './components/Products';
import {Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import  Form  from './components/Form';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Products' element={<Products/>}/>
    <Route  path='/products/:id' element={<Product/>}/>
    <Route  path='/cart' element = {<Cart/>} />
    <Route  path='/form' element = {<Form/>}/>
    </Routes>
    </>
  );
}

export default App;
