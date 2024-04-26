import { useState } from 'react' 
import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'

function App() { 

  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace/>} />
      <Route path="/products" element={<ProductsPage/>}/>

    </Routes>
  )
}

export default App
