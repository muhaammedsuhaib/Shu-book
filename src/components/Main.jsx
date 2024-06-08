import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import ShowBlog from './ShowBlog';
import axios from "axios";
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';

 export const passing=createContext()
const Main = () => {
   
    const [task,setTask]=useState([]);

    const fetchTasks = async () => {
      try {
          const response = await axios.get("http://localhost:4000/api/all");
          setTask(response.data.tasks);
      } catch (error) {
          console.error('Error fetching tasks:', error);
      }
  };

  useEffect(() => {
    fetchTasks();
}, []);
  return (
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
        <passing.Provider value={{task,setTask}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/show' element={<ShowBlog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </passing.Provider>
        </BrowserRouter>
    </div>
  )
}

export default Main