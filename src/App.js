
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'


import './App.css';
import Cart from './pages/Cart.jsx';
import ProductsList from './pages/ProductsList.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Register from './pages/Register.jsx';



function App() {
  return (
    <div className="App">
      {/* 
        여러개의 페이지... 나중에 router로 모두 통합할 생각

        <Login/>
        <Register/>
     
        <Cart/>
        <ProductsList/>     
        <ProductPage/>
      
      */}

      <Home/> 

     
    </div>
  );
}

export default App;
