import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banco from './Banco/Banco.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banco />
  </StrictMode>,
)
