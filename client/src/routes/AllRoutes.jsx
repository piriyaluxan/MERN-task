import {Routes, Route} from 'react-router-dom';
import {Dashboard,Login,Signup} from '../pages';
import React from 'react'

const AllRoutes = () => {

    
  return (
    <>
        <Routes>
            <Route path="" element={<Login/>}/>
            <Route path="" element={<Signup/>}/>
            <Route path="/" element={<Dashboard/>}/>
            
        </Routes>
    </>
  )
}

export default AllRoutes
