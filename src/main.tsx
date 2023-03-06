import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'

import App from './App'
import Login from './components/Login/Login'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
