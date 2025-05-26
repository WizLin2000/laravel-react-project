import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import './Login.css'
import './bento_catalog.css'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Catelog from './bento_catalog';
import BentoDetail from './bento_detail';
import Order from './bento_lunchbag';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/catalog' element={<Catelog/>}/>
        <Route path='/catalog/:id' element={<BentoDetail/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
  </Router> 
  )
}

// // CHATGPT
// import React from 'react';
// import LoginSystem from './LoginSystem';

// function App() {
//   return
//   <router>
//     <routes>
//     <LoginSystem />;
//     </routes>
//   </router> 
  
// }


export default App
