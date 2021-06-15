import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './assets/GlobalStyles'
import Routes from './routes';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Routes/>
    <ToastContainer />
    </>
  );
}

export default App;
