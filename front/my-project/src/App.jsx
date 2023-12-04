import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//vistas 
import HomeLogin from './views/homeLogin'


function App() {


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homelogin" />} />
          <Route path="/homelogin" element={<HomeLogin />} />
        </Routes>
      </BrowserRouter>
    </>
    
    
  )
}

export default App
