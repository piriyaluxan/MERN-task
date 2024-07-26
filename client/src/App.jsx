import { useState } from 'react'
import Signup from "./pages/Signup"
import Login from "./pages/login"
import Add from "./components/addTask"
import Dash from './pages/Dash'
import Home from './pages/Home'
import Update from "./components/UpdateTask"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import './index.css';



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/dash" element={<Dash />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
