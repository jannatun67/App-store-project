import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider } from "react-router/dom";
import { router } from './Routes/routes.jsx';

// Font Awesome
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/your-kit-id.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
