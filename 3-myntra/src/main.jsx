import React from "react"
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { Home } from './Routes/Home.jsx'
import { Bag } from "./Routes/Bag.jsx"
import { Provider } from "react-redux"
import { myntrastore } from "./Store/Index.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />,/* loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
