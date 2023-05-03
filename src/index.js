import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import Search from './components/Search';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Header/>}/>
  <Route path='/Home/:productid' element={<Home/>}/>
  <Route path='/App/' element={<App/>}/>



  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
