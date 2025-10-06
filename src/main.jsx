import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx';
import AuthContextProvider from './context/authContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <ThemeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>
)
