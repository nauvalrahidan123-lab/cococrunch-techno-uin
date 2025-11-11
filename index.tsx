import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Ini memanggil konten dari file App.tsx
import './index.css'; // Ini memanggil file CSS utama Anda

// Temukan elemen HTML dengan ID 'root' di index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Merender komponen utama aplikasi Anda */}
    <App />
  </React.StrictMode>,
);
