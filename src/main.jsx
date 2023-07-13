import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacto from './contacto.jsx'
import './index.css'
import Head  from './Head.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head/>
    <App />
    <Contacto/>
  </React.StrictMode>,
)
