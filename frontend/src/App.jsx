
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreateNewPage from './pages/CreateNewPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React, { useEffect, useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <>
      <Navbar onToggleTheme={() => setDark(d => !d)} />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/createnew' element={<CreateNewPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
