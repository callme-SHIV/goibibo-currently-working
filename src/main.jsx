import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header/Header.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'
import { Route } from 'react-router-dom'
import Flight from './Header/Flight.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path ='' element={<Flight/>}></Route>
      <Route path='flight' element={<Flight/>} />
      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={router} />
  </React.StrictMode>,
)
