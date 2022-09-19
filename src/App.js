import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import pageNotFound from "./components/PageNotFound/PageNotFound";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="movie/:imdbID" element={<MovieDetail />} />
            <Route element= {<pageNotFound />} />
          </Routes>
        </div>
          
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
