import React from 'react';
import '../css/AircraftCard.css';

const AircraftCard = ({ aircraft, onClick, isSelected }) => {
  return (
    <div
      className={`aircraft-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(aircraft)}
    >
      <img src={aircraft.img} alt={aircraft.name} />
      <p className='aircraft-name'>{aircraft.name}</p>
    </div>
  );
};

export default AircraftCard;
