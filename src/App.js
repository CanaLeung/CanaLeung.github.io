import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.js';
import GuessWho from './pages/GuessWho.js';
import './css/WelcomePage.css';
import './css/EnterName.css';
import './css/EnterHobby.css';
import './css/Deny.css';
import './css/Greeting.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userHobby, setUserHobby] = useState('');
  const [currentPage, setCurrentPage] = useState('WelcomePage');

  const handleNewGame = () => {
    navigate('/');
    setCurrentPage('GuessWhoHome');
  };

  const handleHome = () => {
    navigate('/');
    setCurrentPage('WelcomePage');
    setUserName('');
    setUserHobby('');
  };

  return (
    <Routes>
      <Route path="/GuessWho/game" element={<GuessWho onNewGame={handleNewGame} onHome={handleHome} />}/>
      <Route path="*" element={
        <MainPage
            userName={userName}
            setUserName={setUserName}
            userHobby={userHobby}
            setUserHobby={setUserHobby}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />}/>
    </Routes>
  );
}

export default App;
