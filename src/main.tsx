import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SimpleCounter from './pages/SimpleCounter'
import DisplayList from './pages/DisplayList'
import ContextApi from './pages/ContextApi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
        <Route path="/display-list" element={<DisplayList />} />
        <Route path="/context-api" element={<ContextApi />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)