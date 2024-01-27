import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MetaDataPage from './pages/MetaDataPage.jsx'
import ValidationPage from './pages/ValidationPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import ProtectedRoutes from './pages/ProtectedLogin.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/metaDataPage",
        element: (
            <MetaDataPage />
        )
      },
      {
        path: "/validationPage",
        element: (
          <ProtectedRoutes>
            <ValidationPage />
          </ProtectedRoutes>
        )
      }
    ]
  }])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>


    <RouterProvider router={router} ></RouterProvider>
  </Provider>
)
