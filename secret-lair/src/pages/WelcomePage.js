import React, { useEffect, useState } from 'react';

function WelcomePage({ onNext }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (sliderValue >= 100 && !triggered) {
      setTriggered(true);
      setTimeout(() => {
        onNext();
      }, 2000); //2s
    }
  }, [sliderValue, triggered]);
 
  return (
    <div  className={`WelcomePageSlideUp ${triggered ? "slide-up": ""}`}>
    <div className={'WelcomePage'}>
      <div className={`WelcomePageContents`}>
      <span className={`Title ${triggered ? "centered": ""}`}
        >welcome
      </span>
      <br></br>
      <div className={`SliderContainer ${triggered ? "fade-out": ""}`}>
      <input 
        className='slider' 
        type='range' 
        min="0" 
        max="105" 
        value={sliderValue}
        onChange={(e) => setSliderValue(parseInt(e.target.value))}
        style={{
          background: `linear-gradient(to right, #accce3 ${sliderValue/1.08}%, white ${sliderValue/1.08}%)`,
        }}/>
      <br/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default WelcomePage;
