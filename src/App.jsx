import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pastes from './components/Pastes';
import ViewPastes from './components/ViewPastes';
import { RouterProvider } from 'react-router-dom';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="min-h-screen min-w-screen bg-gray-50">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div className="min-h-screen min-w-screen bg-gray-50">
        <Navbar/>
        <Pastes/>
      </div>
    }, 
    {
      path:"/pastes/:id",
      element:
      <div className="min-h-screen min-w-screen bg-gray-50">
        <Navbar/>
        <ViewPastes/>
      </div>
    },
  ]
);

function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App