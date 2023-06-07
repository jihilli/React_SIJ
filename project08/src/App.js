import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Storage from './components/Storage';

import {Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])

  /* ***미션 수행 순서!***
  1) Route 처리
    - BrowserRouter, Routes, Route, ... 등등 모든 작업 해주기 
    - import , export 도 잊지 말고!
  
  2) App.js 에 list state 관리해주기
    - tip! 함수 또한 props로 보낼 수 있다는 것을 명심!
    ex) const[list, setList] = useState([])
        ...
        <Main list={list} setList={setList}/> 
          -> 자식 요소에서 함수도 사용할 수 있다는 거시다~ 

  3) Header Mission
  4) Product List Mission
  5) Product Item Mission
  6) Product Detail Mission

  */
  return (
    <div className='container'>
      <Header/>

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
        <Route path='/storage' element={<Storage/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
