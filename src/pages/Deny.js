import { useState } from 'react';
import React from 'react';
import apology from '../assets/apology.png';

function Deny({ onTryAgain }) {
  const [triggered, setTriggered] = useState(false); 
    return (
      <div className={`DenyFadeOut ${triggered ? "fade-out": ""}`}>
        <div className='Deny'>
          <div className='DenyContents'>
            <div className='DenyText'>
            <h1>Uh oh! I'm so sorry! </h1>
            <h1>You aren't allowed access to the rest of the website! </h1>
            <button 
              onClick={() => {
                setTriggered(true);
                setTimeout(() => {
                  onTryAgain();
                }, 1000);
              }}>Return</button>
            </div>
            <div className='DenyImage'>
              <img src={apology}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Deny;