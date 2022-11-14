import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login';
import ProfView from './pages/ProfView';
import Turma from './pages/Turma';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/aluno",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/professor",
    element: <ProfView />,
  },
  {
    path: "/turma",
    element: <Turma />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)