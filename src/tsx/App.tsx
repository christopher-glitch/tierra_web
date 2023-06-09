import React from 'react';
import '../css/App.css';
import '../css/index.css';
import '../css/header.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Discography from './Pages/Discography';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/discography"} element={<Discography />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
