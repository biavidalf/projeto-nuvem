import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)