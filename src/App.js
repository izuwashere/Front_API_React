
import './App.css';
import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { Footer } from './components/public/Footer';
import { Navbar } from './components/public/Navbar';
import {Main} from './components/public/Main';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';

function App() {
  return (
   <div>
  {/* Navbar */}
  <Navbar/>

    <Routes>
    <Route  path="/" element={<Main/>}/>
    <Route path={"/details/:id"}  element={<Detail/>}/>
    <Route path={"/user-form"} element={<UserForm/>}/>
    
  </Routes>

  {/* Footer */}
   <Footer />
   </div>
  );
}

export default App;
