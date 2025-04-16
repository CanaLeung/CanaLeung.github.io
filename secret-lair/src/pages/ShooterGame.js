import React, { useState, useEffect, useRef } from 'react';

export default function ShooterGame({onReturn}) {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(null); // { x: number, y: number }
  const [gameRunning, setGameRunning] = useState(false);
  const gameAreaRef = useRef(null);
  var gameDuration = 10000;  //10 seconds
  const [targetTimeout, setTargetTimeout] = useState(1000);
  const [targetRespawn, setTargetRespawn] = useState(1500);

  useEffect(() => {
    let spawnInterval;
    let removeTimeout;

    if (gameRunning) {
      spawnInterval = setInterval(() => {
        const area = gameAreaRef.current;
        if (!area) return;

        const areaWidth = area.offsetWidth;
        const areaHeight = area.offsetHeight;

        const size = 50; // size of the target
        const x = Math.random() * (areaWidth - size);
        const y = Math.random() * (areaHeight - size);

        setTarget({ x, y });

        // Remove target after 1 second
        removeTimeout = setTimeout(() => {
          setTarget(null);
        }, targetTimeout);
      }, targetRespawn); // new target every 1.5 sec
    }

    return () => {
      clearInterval(spawnInterval);
      clearTimeout(removeTimeout);
    };
  }, [gameRunning]);

  const handleClickTarget = () => {
    setScore((prev) => prev + 1);
    setTarget(null);
  };

  const startGame = () => {
    setScore(0);
    setGameRunning(true);

    setTimeout(() => {
      setGameRunning(false);
      setTarget(null);
    }, gameDuration);
  };

  return (
    <div className="anything"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
      <h1 className="text-2xl font-bold">Cupid's game</h1>
      <p className="text-lg">Score: {score}</p>
      {!gameRunning && (
        <button
          onClick={startGame}
        >
          Start Game
        </button>
      )}

      <div
        ref={gameAreaRef}
        style={{
            position: 'relative',
            width: '600px',
            height: '400px',
            border: '2px solid gray',
            backgroundColor: '#f9fafb', // light gray
            overflow: 'hidden',
            borderRadius: '8px',
          }}
      >
        {target && (
          <div
            onClick={handleClickTarget}
            style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '9999px',
                cursor: 'pointer',
                left: `${target.x}px`,
                top: `${target.y}px`,
                width: '50px',
                height: '50px',
              }}
          ></div>
        )}
      </div>
      <button onClick={onReturn}>Return</button>
    </div>
  );
} 
