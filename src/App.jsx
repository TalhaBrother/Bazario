import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/home'
import Login from './pages/login'; 
import Register from './pages/register';
import Seller from './pages/seller';
import NotFound from './pages/notFound';
import LandingPage from './pages/landingPage';
import ThemeContextProvider from './context/ThemeContext';
import Product from './components/product';

function App() {
   
  return (
    <>
    
    <Routes>
        <Route path='/' element={<>
        <LandingPage/>
        </>}/>
      <Route path='home' element={<>
        <LandingPage/>
        </>}/>
         <Route path='login' element={<>
        <Login/>
        </>}/>
         <Route path='register' element={<>
        <Register/>
        </>}/>
         <Route path='seller' element={<>
        <Seller/>
        </>}/>
           <Route path='product' element={<>
        <Product/>
        </>}/>
           <Route path='*' element={<>
        <NotFound/>
        </>}/>
    </Routes>
   </>
  )
}

export default App
