import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './router/home/Home';
import Login from './router/login/Login';
import Wishis from './router/wishis/Wishis';
import Cart from './router/cart/Cart';
import { PRODUCTS } from "./static/index"

function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wishes' element={<Wishis/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {/* <Footer/> */}
      {/* 
        Hello
      */}
    </div>
  );
}

export default App;

