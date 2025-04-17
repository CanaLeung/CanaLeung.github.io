import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import './css/WelcomePage.css';
import './css/EnterName.css';
import './css/EnterHobby.css';
import './css/Deny.css';
import './css/Greeting.css';
import {Routes, Route, Router, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="*" element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
