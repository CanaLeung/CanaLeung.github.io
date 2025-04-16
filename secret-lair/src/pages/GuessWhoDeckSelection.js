import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aircraftList from '../components/AircraftList';
import AircraftCard from '../components/AircraftCard';
import '../css/GuessWhoDeckSelection.css';

const GuessWhoDeckSelection = ({onBack}) => {
  const [selectedAircraft, setSelectedAircraft] = useState([]);
  const navigate = useNavigate();
  const limit = 24;

  const toggleAircraft = (aircraft) => {
    if (selectedAircraft.includes(aircraft)) {
      setSelectedAircraft(prev => prev.filter(a => a !== aircraft));
    } else if (selectedAircraft.length < limit) {
      setSelectedAircraft(prev => [...prev, aircraft]);
    }
  };

  const startGame = () => {
    const ids = selectedAircraft.map(ac => ac.id).join(',');
    const encoded = btoa(ids); 
    navigate(`/GuessWho/game?deck=${encoded}`);
  };

  return (
    <div className="DeckSelectionScreen">
      <h2 className='DeckSelectionTitle'
        >Select 24 Aircrafts!</h2>
      <div className="aircraft-grid">
        {aircraftList.map((aircraft) => (
          <AircraftCard
            key={aircraft.id}
            aircraft={aircraft}
            isSelected={selectedAircraft.includes(aircraft)}
            onClick={() => toggleAircraft(aircraft)}
          />
        ))}
      </div>
      <div
        className='Footer'
      >
        <div
          className='Third'
        >
          <button className='DeckButton'
            onClick={() => {onBack();}}
          >←</button>
        </div>
        <button className={`Third DeckButton PlayButton ${selectedAircraft.length!==limit ? "Disabled": ""}`} 
        disabled={selectedAircraft.length !== limit} 
        onClick={startGame}>
        Start
        </button>
        <div>
          <p
            className='Third italics'
          >{`${selectedAircraft.length}`} out of {`${limit}`} selected</p>
        </div>
      </div>
      
    </div>
  );
};

export default GuessWhoDeckSelection;
