import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import { Pages } from "./Pages/Pages";
import { Footer } from "./Pages/Footer";
import { Navbar } from './Pages/Navbar';
import { BackToTop } from './Components/BackToTop';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Pages/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
