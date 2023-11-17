import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Link } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <BrowserRouter>
 <App />

      {/* <Routes> */}
        {/* <Link to="*" element={ <App /> }>
        </Link> */}
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
