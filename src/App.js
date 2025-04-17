import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.js';
import GuessWho from './pages/GuessWho.js';
import './css/WelcomePage.css';
import './css/EnterName.css';
import './css/EnterHobby.css';
import './css/Deny.css';
import './css/Greeting.css';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");

    if (redirectPath) {
      // Only redirect if not already at the correct path
      if (location.pathname !== redirectPath) {
        navigate(redirectPath, { replace: true });
      } else {
        // Clean up the URL by removing the redirect param
        const cleanUrl = window.location.origin + "/SecretLair" + redirectPath;
        window.history.replaceState({}, "", cleanUrl);
      }
    }
  }, [location, navigate]);

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
