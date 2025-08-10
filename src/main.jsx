import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
   <ShopContextProvider>
      <RouterProvider router={router} />,
   </ShopContextProvider>
  </StrictMode>,
)
