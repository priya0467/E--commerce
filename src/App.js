
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
import Login from './Component/Authntication/login';
import Signup from './Component/Authntication/sighup';
import UserAuthContextProvider from './Context/UserAuth';
import ProctectedRoute from './Component/Authntication/proctectedRoute';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
        <UserAuthContextProvider>
       <NavScroll/>
         <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route 
         path="/home" 
         element={
         <ProctectedRoute>
             <Home/>
         </ProctectedRoute>}
         ></Route>
         <Route path="/store" element={<Store/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/product" element={<Product/>}></Route>
         <Route path="/contact" element={<ContactUs/>}></Route>
         </Routes>
         </UserAuthContextProvider>
         </CartProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
