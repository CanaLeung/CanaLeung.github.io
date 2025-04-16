import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import aircraftList from '../components/AircraftList';
import AircraftCard from '../components/AircraftCard';
import '../css/GuessWho.css';
 
const GuessWho = ({onNewGame, onHome}) => {
    const [searchParams] = useSearchParams();
    const encodedDeck = searchParams.get("deck");
    const [boardAircrafts, setBoardAircrafts] = useState([]);
    const [playerAircraft, setPlayerAircraft] = useState(null);
    const [selectedAircraftIds, setSelectedAircraftIds] = useState([]);
    const [copied, setCopied] = useState(false);

    const copyLinkToClipboard = () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset message after 2 sec
      });
    };

    const toggleAircraftSelection = (aircraftId) => {
        setSelectedAircraftIds(prevSelected =>
          prevSelected.includes(aircraftId)
            ? prevSelected.filter(id => id !== aircraftId) 
            : [...prevSelected, aircraftId]
        );
      };

      useEffect(() => {
        if (encodedDeck) {
          try {
            const decoded = atob(encodedDeck);
            const ids = decoded.split(',').map(Number);
            const selection = aircraftList.filter(ac => ids.includes(ac.id));
            setBoardAircrafts(selection);
            const chosen = selection[Math.floor(Math.random() * selection.length)];
            setPlayerAircraft(chosen);
          } catch (e) {
            console.error("Invalid deck encoding", e);
          }
        }
      }, [encodedDeck]);

    return (
      <div className="game-container ">
        <div className='header'>
        <div className='TitleContainer'>
        <h2 className='GuessWhoTitle'>Guess Who!! ✈️</h2>
          <div className='CopyButtonContainer'>
            <button className='CopyButton' onClick={copyLinkToClipboard}>
            📋          </button>
            {copied && <p style={{ fontStyle: 'italic' }}>Link copied!</p>}
          </div>
        </div>
        <div className='LeftSideContainer'>
          <button className='GuessWhoNavButton'
            onClick = {() => {
              onNewGame();
            }}>New</button>
          <button className='GuessWhoNavButton'
            onClick={() => {
              onHome();
            }}
          >Home</button>
        </div>

        </div>

        <div className='GameBoard'>
        <div className="AllAircrafts">
          {boardAircrafts.map(aircraft => (
            <AircraftCard 
                key={aircraft.id} 
                aircraft={aircraft} 
                isSelected={selectedAircraftIds.includes(aircraft.id)}
                onClick={() => {toggleAircraftSelection(aircraft.id)}} />
          ))}
        </div>
        {playerAircraft && (
        <div className='PlayerAircraft'>
            <p>Your aircraft:</p>
            <AircraftCard 
                key={playerAircraft.id} 
                aircraft={playerAircraft} 
                onClick={()=>{}}
            />
        </div>
        )}
        </div>

      </div>
    );
  };
  
  export default GuessWho;