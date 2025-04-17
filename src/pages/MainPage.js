import React, { useState } from "react";
import WelcomePage from './WelcomePage';
import EnterName from './EnterName';
import NameFail from './Deny';
import EnterHobby from './EnterHobby';
import ShooterGame from './ShooterGame';
import Greeting from "./Greeting";
import GuessWhoHome from "./GuessWhoHome";
import GuessWhoDeckSelection from "./GuessWhoDeckSelection";

function MainPage({
  userName,
  setUserName,
  userHobby,
  setUserHobby,
  currentPage,
  setCurrentPage
}) {
  const allowedUserNames = ['ario', 'rio'];
  const allowedUserHobbies = ['koen'];

  return (
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
                rawName.charAt(0).toUpperCase() +
                  rawName.slice(1).toLowerCase()
              );
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
              const rawHobby = userHobby;
              setUserHobby(
                rawHobby.charAt(0).toUpperCase() +
                  rawHobby.slice(1).toLowerCase()
              );
              setCurrentPage('Greeting');
            } else {
              setCurrentPage('Deny');
            }
          }}
        />
      )}

      {currentPage === 'Deny' && (
        <NameFail
          onTryAgain={() => {
            setCurrentPage('WelcomePage');
            setUserName('');
            setUserHobby('');
          }}
        />
      )}

      {currentPage === 'Greeting' && (
        <Greeting onPlayGame={() => setCurrentPage('GuessWhoHome')} />
      )}

      {currentPage === 'GuessWhoHome' && (
        <GuessWhoHome
          onSelectDeck={() => setCurrentPage('GuessWhoDeckSelection')}
        />
      )}

      {currentPage === 'GuessWhoDeckSelection' && (
        <GuessWhoDeckSelection
          onBack={() => setCurrentPage('GuessWhoHome')}
        />
      )}
    </div>
  );
}
  
export default MainPage;