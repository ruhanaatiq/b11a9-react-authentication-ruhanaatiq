import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import { UserProvider } from './context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
   <RouterProvider router={router}></RouterProvider>
   </UserProvider>
  </StrictMode>,
)
