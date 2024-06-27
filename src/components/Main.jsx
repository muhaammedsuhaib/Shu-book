import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import axios from "axios";
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';
import Collect from './Collect';
import Login from './Login';
import Changep from './Changep';

 export const passing=createContext()
const Main = () => {
   
    const [task,setTask]=useState([]);
    const [userData,setUserData]=useState(null);

  

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
    }
}, []);

  return (
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
        <passing.Provider value={{task,setTask,userData,setUserData}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/collect' element={<Collect/>}/>
        <Route path='/change' element={<Changep/>}/>
        </Routes>
        </passing.Provider>
        </BrowserRouter>
    </div>
  )
}

export default Main