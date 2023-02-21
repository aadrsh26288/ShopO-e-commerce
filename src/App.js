import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Shop from './Components/Shop';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { BrowserRouter, Route, Router, Routes,Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import Contact from './Components/Contact';

import './App.css';
import Footer from './Components/Footer';
import Sales from './Components/Sales';


const App = () => {
  return (
    <Provider store={store}>
  <div>
     
      <BrowserRouter>
       <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sales' element={<Sales/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </Provider>
  
  )
}

export default App
