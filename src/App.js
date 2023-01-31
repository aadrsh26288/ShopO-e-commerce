import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Shop from './Components/Shop';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import Cart from './Components/Cart';

import './App.css';
import Footer from './Components/Footer';


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
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </Provider>
  
  )
}

export default App
