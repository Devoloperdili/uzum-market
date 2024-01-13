import './App.css';
// import Footer from './components/footer/Footer';
import NavbarContainer from "./components/navbar/Navbarcontainer"
import { Route,Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './router/home/Home'
import Login from './router/login/Login'
import Cart from './router/cart/Cart'
import Wishes from './router/wishes/Wishes'
import Singleroute from './router/single-route/Singleroute';
import { PRODUCTS } from './static/index'
import Not from './router/not-found/Not';
function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS}/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishes' element={<Wishes/>}/>
        <Route path='/product/:id' element={<Singleroute/>}/>
        <Route path='*' element={<Not/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
