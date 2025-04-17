import { useState } from "react";
import React from 'react';

function Greeting({ onPlayGame }) {
  const [triggered, setTriggered] = useState(false); 
    return (
      <div className={`GreetingFadeOut ${triggered ? "fade-out": ""}`}>
      <div className='Greeting'>
      <div className='GreetingContents'>
        <h1>Hi Rio!! </h1>
        <p>I know your birthday has passed a long long time ago and I'm so sorry 
          I didn't have the time to prepare something cool for you! I spent the 
          last few days putting together this website with a small game in it 
          that I hope we could play together!
        </p>
        <p className='italics'>(I truly don't know how to make a website so I 
          apologize that everything looks super newby TTT)</p>
        <p>Happy Happy Birthday!! I love you :3</p>
        <button onClick={() => {
          setTriggered(true);
          setTimeout(() => {
            onPlayGame();
          }, 1000);
          }}
        >Play</button>
      </div>
      </div>
      </div>
    );
  }

export default Greeting;