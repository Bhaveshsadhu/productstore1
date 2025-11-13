import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as BrouserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </StrictMode>,
)
