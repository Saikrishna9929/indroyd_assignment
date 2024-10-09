import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import "./index.css"


const ComputerMainScreen = () => {
  
  const [winner] = useState('');

  const playerUrl = window.location.origin + '/player'; // URL for players to join the game

  return (
    <div className = "main-screen">
      <h1>Welcome to the KBC Game!</h1>
     
      <QRCodeCanvas className = "qr-code" value={playerUrl} size={256} />
      <br />
      {winner && <h3 className = "congrats">Congratulations, {winner}!</h3>}
      <br />
      
    </div>
  );
};

export default ComputerMainScreen;
