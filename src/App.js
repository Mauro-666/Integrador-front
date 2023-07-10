
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import AyudaPage from './pages/AyudaPage';
import HistoriaPage from './pages/HistoriaPage';
import HomePage from './pages/HomePage';
import ModaPage from './pages/ModaPage';
import SupermercadoPage from './pages/SupermercadoPage';
import VenderPage from './pages/VenderPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='ayuda' element={<AyudaPage/>}/>
        <Route path='historia' element={<HistoriaPage/>}/>
        <Route path='moda' element={<ModaPage/>}/>
        <Route path='supermercado' element={<SupermercadoPage/>}/>
        <Route path='vender' element={<VenderPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
