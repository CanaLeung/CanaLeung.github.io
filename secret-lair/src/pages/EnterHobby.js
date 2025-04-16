import { useState } from "react";
import React from 'react';

function EnterHobby({ userHobby, setUserHobby, onBack, onSubmit }) {
  const [triggered, setTriggered] = useState(false); 
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTriggered(true);
        
      setTimeout(() => {
        onSubmit();
      }, 1000);
    }
  };

    return (
      <div className={`EnterHobbyFadeOut ${triggered ? "fade-out": ""}`}>
        <div className='EnterHobby'>
          <div className='EnterHobbyContents'>
            <h1>
              Please fill in the blank:
            </h1>
            <p>I like  {" "}
            <input
                className='TextInput'
                type="text"
                style={{
                  width: `50%`,
                }}
                value={userHobby}
                onChange={(e) => setUserHobby(e.target.value)}
                onKeyDown={handleKeyDown}
            />
             {" "} collecting!
            </p>
          </div>
        </div>
        <div className='NavButtons'>
        <button onClick={() => {
          setTriggered(true);
          setTimeout(() => {
            onBack();
          }, 1000);
        }}
          >←</button>
        <button onClick={() => {
          setTriggered(true);
          
          setTimeout(() => {
            onSubmit();
          }, 1000);
        }}
          >→</button>
        </div>
      </div>
    );
  }

export default EnterHobby;