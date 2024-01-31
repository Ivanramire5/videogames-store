import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Horror from "./components/Paginas/Horror"
import Inicio from "./components/Paginas/Inicio"
import Indies from "./components/Paginas/Indies"
import Rpg from "./components/Paginas/Rpg"
import Sandbox from "./components/Paginas/Sandbox"
import Shooters from "./components/Paginas/Shooters"
import Stats from "./components/Paginas/Stats"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {


  return (
    <div className="AppScreen">
      <h1 className="tituloWiki">GamingWiki</h1>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/horror" element={<Horror/>}/>
          <Route path="/indies" element={<Indies/>}/>
          <Route path="/rpg" element={<Rpg/>}/>
          <Route path="/sandbox" element={<Sandbox/>}/>
          <Route path="/shooters" element={<Shooters/>}/>
          <Route path="/stats" element={<Stats/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
