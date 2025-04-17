import React from "react";

function Header({onHome, onMenu}){
    return (
        <div style={{
            height: '50px',
            padding: '10px 10px 10px 10px',
            marginBottom: '50px',
            backgroundColor: '#779cd8',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
        <div style={{textAlign: 'left', width: '60vw', paddingLeft: '20px', fontFamily: 'Poppins' }}>
            <h1>Hung Hung's Lair</h1>
        </div>
        <div style={{textAlign: 'right', margin: '10px', width: '40vw'}}>
            <button style={{margin: '0px'}}
                onClick={onHome}>Home</button>
            <button style={{margin: '0px'}}
                onClick={onMenu}>Menu</button>
        </div>
      </div>
    )
}
  
export default Header;