import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login';
import ProfView from './pages/ProfView';
import Turma from './pages/Turma';
import Atividade from './pages/Atividade';
import Admin from './pages/Admin';
import AdminHome from './pages/AdminHome';
 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },{
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
  },
  {
    path: "/turma/add-atvd",
    element: <Atividade />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/teste",
    element: <AdminHome/>,
  }
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
