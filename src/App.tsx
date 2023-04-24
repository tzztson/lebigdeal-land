import React from 'react';
import './App.css';
import Navbar from './components/layout/LayoutHeader';
import Footer from './components/layout/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
