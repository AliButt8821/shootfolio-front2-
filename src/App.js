import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../src/Assets/Pages/Home"
import About from './Assets/Pages/About';
import Portfolio from './Assets/Pages/Portfolio';
import Login from './Assets/Pages/Login'
import Signup from './Assets/Pages/Signup';
import Forget from './Assets/Pages/Forget'
import Performance from "./Assets/Pages/Performance"
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/signin' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/forget' element={<Forget/>}></Route>
    <Route path='/performance' element={<Performance/>}></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
