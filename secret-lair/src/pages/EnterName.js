import React, {useState} from 'react';

function EnterName({ userName, setUserName, onBack, onSubmit }) {
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
    <div className={`EnterNameFadeOut ${triggered ? "fade-out": ""}`}>
    <div className={`EnterName`}>
      <div className={`EnterNameContents`}>
      <h1>Please enter your name:</h1>
      <input
        className='TextInput'
        type="text"
        style={{
          width: `100%`,
        }}
        value={userName}
        onChange={(e) => 
            setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <br></br>
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
    </div>
    </div>
  );
}

export default EnterName;
