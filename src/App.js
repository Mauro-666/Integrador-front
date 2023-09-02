
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import video from './assets/video/video2.mp4';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HistoriaPage from './pages/HistoriaPage';
import HomePage from './pages/HomePage';
import AcercaPage from './pages/AcercaPage';
import CategoriasPage from './pages/CategoriasPage';
import NovedadesPage from './pages/NovedaesPage';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
      <Nav/>
      <br/>
      {/* <ReactPlayer
      url={video} controls loop/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='contacto' element={<ContactoPage/>}/>
        <Route path='historia' element={<HistoriaPage/>}/>
        <Route path='acerca' element={<AcercaPage/>}/>
        <Route path='categorias' element={<CategoriasPage/>}/>
        <Route path='novedades' element={<NovedadesPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
