import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './components/Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-full mx-auto'>
   <AuthProvider>
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
   </AuthProvider>
  </div>
)
