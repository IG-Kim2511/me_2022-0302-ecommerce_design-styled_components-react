import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';


/* 
  <React.StrictMode>
    <App />
  </React.StrictMode>,

        <Route index element={<Home />} />

          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
          

*/
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ProductPage" element={<ProductPage />}></Route>
          <Route path="/ProductsList" element={<ProductsList />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
