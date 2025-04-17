import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GuessWhoHome.css';
import aircraftList from '../components/AircraftList';
import { useState } from 'react';
const getRandomSubset = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0,count);
}

const GuessWhoHome = ({onSelectDeck}) => {
  const navigate = useNavigate();
  const [triggered, setTriggered] = useState(false);
  const onRandom = () => {
    const selectedAircraft = getRandomSubset(aircraftList, 24);
    const ids = selectedAircraft.map(ac => ac.id).join(',');
    const encoded = btoa(ids); 
    navigate(`/GuessWho/game?deck=${encoded}`);
  };

  return (
    <div className={`GuessWhoHomeFadeOut ${triggered ? "fade-out": ""}`}>
    <div className="GuessWhoHome">
      <h1 className='GuessWhoHomeTitle'>✈️ Guess Who! ✈️</h1>
      <h2 className='Subheading'>*Aircraft Edition*</h2>
      <button 
        className='Button CustomDeck'
        onClick={() => {
          setTriggered(true);
          setTimeout(() => {
            onSelectDeck();
          }, 700);
          }}>Choose Your Own Deck</button>
      <button 
        className='Button RandomDeck'
        onClick={() => {
          setTriggered(true);
          setTimeout(() => {
            onRandom();
          }, 700);
          }}>Random Deck</button>
    </div>
    </div>
  );
};

export default GuessWhoHome;
