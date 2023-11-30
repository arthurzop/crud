import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import HomeLog from './pages/homeLog';
import "./index.css"
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/logado",
        element: <HomeLog/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

