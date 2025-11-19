import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Meu Estudo de Caso</Link></h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Product />} />
      </Routes>
    </div>
  )
}
