import React from 'react';
import ReactDOM from 'react-dom/client';
import UsersPage from '@/pages/Users';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <UsersPage />
  </React.StrictMode>,
);
