
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'


import './App.css';
import Cart from './pages/Cart.jsx';
import ProductsList from './pages/ProductsList.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Register from './pages/Register.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';




function App() {
  return (
    <div className="App">
 

      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ProductPage" element={<ProductPage />}></Route>
          <Route path="/ProductsList" element={<ProductsList />}></Route>
          <Route path="/Register" element={<Register />}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
