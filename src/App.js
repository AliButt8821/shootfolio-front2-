import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../src/Assets/Pages/Home"
import About from './Assets/Pages/About';
import Portfolio from './Assets/Pages/Portfolio';
import Login from './Assets/Pages/Login'
import Signup from './Assets/Pages/Signup';
import Forget from './Assets/Pages/Forget'
import Performance from "./Assets/Pages/Performance"
import Gamehome from './Assets/Pages/Game/Gamehome';
import Exploring from './Assets/Pages/Game/Exploring';
import Playgame from './Assets/Pages/Game/Playgame';
import Registration from './Assets/Pages/Game/Registration';
import Choosinggame from './Assets/Pages/Game/Choosinggame';

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
    <Route path='/gamehome' element={<Gamehome/>}></Route>
    <Route path='/exploring' element={<Exploring/>}></Route>
    <Route path='/playgame' element={<Playgame/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/choosinggame' element={<Choosinggame/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
