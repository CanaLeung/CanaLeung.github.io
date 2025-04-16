import React, { useState } from "react";
import WelcomePage from './WelcomePage';
import EnterName from './EnterName';
import NameFail from './Deny';
import EnterHobby from './EnterHobby';
import ShooterGame from './ShooterGame';
import Greeting from "./Greeting";
import GuessWho from "./GuessWho";
import GuessWhoHome from "./GuessWhoHome";
import GuessWhoDeckSelection from "./GuessWhoDeckSelection";
import { Route, Routes, useNavigate } from "react-router-dom";

function MainPage(){
    const allowedUserNames = ['ario', 'rio'];
    const allowedUserHobbies = ['koen'];
    const [userName, setUserName] = useState('');
    const [userHobby, setUserHobby] = useState('');
    const [currentPage, setCurrentPage] = useState('GuessWhoHome');
    const navigate = useNavigate(); 
    return (
      <Routes>
        <Route
          path="/"
          element = {
        <div className="MainPage">
        {currentPage === 'WelcomePage' && (
            <WelcomePage onNext={() => setCurrentPage('EnterName')} />
        )}
        {currentPage === 'EnterName' && (
            <EnterName
              userName={userName}
              setUserName={setUserName}
              onBack={() => setCurrentPage('WelcomePage')}
              onSubmit={() => {
                if (allowedUserNames.includes(userName.trim().toLowerCase())) {
                  const rawName = userName;
                  setUserName(
                    rawName.charAt(0).toUpperCase() 
                    + rawName.slice(1).toLowerCase());
                  setCurrentPage('EnterHobby');
                } else {
                  setCurrentPage('Deny');
                }
              }}
            />
          )}
        {currentPage === 'EnterHobby' && (
            <EnterHobby 
              userHobby={userHobby}
              setUserHobby={setUserHobby}
              onBack={() => setCurrentPage('EnterName')}
              onSubmit={() => {
                if (allowedUserHobbies.includes(userHobby.toLowerCase())) {
                  setCurrentPage('Greeting');
                  const rawHobby = userHobby;
                  setUserHobby(
                    rawHobby.charAt(0).toUpperCase() 
                    + rawHobby.slice(1).toLowerCase());
                } else {
                  setCurrentPage('Deny');
                }
              }} />
        )}
        {currentPage === 'Deny' && (
            <NameFail onTryAgain={() => {
              setCurrentPage('WelcomePage');
              setUserName('');
              setUserHobby('');
            }} />
        )}
        {currentPage === 'Greeting' && (
            <Greeting 
            onPlayGame={ () => {setCurrentPage('GuessWhoHome')}}/>
        )}
        {currentPage === 'GuessWhoHome' && (
            <GuessWhoHome
            onSelectDeck = {() => {setCurrentPage('GuessWhoDeckSelection')}}/>
        )}
        {currentPage === 'GuessWhoDeckSelection' && (
            <GuessWhoDeckSelection
              onBack={()=> {setCurrentPage('GuessWhoHome')}}
            />
        )}
        </div>}>
        </Route>
        
        <Route 
          path="/GuessWho/game"
          element= {
            <GuessWho
            onNewGame={()=> {
              navigate(`/`);
              setCurrentPage('GuessWhoHome');
            }}
            onHome={() => {
              navigate(`/`);
              setCurrentPage('WelcomePage');
            }}/>}>
        </Route>       
        </Routes>
      );
}
  
export default MainPage;