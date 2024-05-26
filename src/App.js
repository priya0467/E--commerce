
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavScroll from './Component/Navbar/navbar';
import Home from './Component/HOME/home';
import Store from './Component/STORE/store';
import About from './Component/ABOUT/about';
import Cart from './Component/Cart/Cart';
import CartProvider from './Context/reducers';
import Product from './Component/Product/product';
import ContactUs from './Component/Contact/contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
       <NavScroll/>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/store" element={<Store/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/product" element={<Product/>}></Route>
         <Route path="/contact" element={<ContactUs/>}></Route>
         </Routes>
         </CartProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
