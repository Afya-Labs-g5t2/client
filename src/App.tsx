import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './assets/GlobalStyles'
import Routes from './routes';

function App() {
  return (
    <div className="app-container">
      <GlobalStyles/>
      <Routes/>
      <ToastContainer />
    </div>
  );
}

export default App;
