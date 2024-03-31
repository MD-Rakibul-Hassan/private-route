import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Login from './components/pages/Login/Login.jsx';
import Regester from './components/pages/Regester/Regester.jsx';
import ContexProvider from './contexts/context.jsx';
import Private from './components/Private/Private.jsx';
import Items from './components/pages/Items/Items.jsx';
const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element:<Home />
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/signup',
        element:<Regester />
      },
      {
        path: '/items',
        element: <Private>
          <Items />
        </Private>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContexProvider >
    <RouterProvider router={route}></RouterProvider>
  </ContexProvider>
)
