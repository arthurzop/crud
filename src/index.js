import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home';
import Logado from './pages/homeLog';
import "./index.css"

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "logado",
                element: <Logado/>
            }
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

