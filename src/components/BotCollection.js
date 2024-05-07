import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import axios from 'axios';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState({});

  useEffect(() => {
    axios.get('/bots')
     .then(response => {
        setBots(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBotSelect = (botId) => {
    setSelectedBots((prevSelectedBots) => ({...prevSelectedBots, [botId]: true }));
  };

  return (
    <div>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onSelect={() => handleBotSelect(bot.id)}
          isSelected={selectedBots[bot.id]}
        />
      ))}
    </div>
  );
}

export default BotCollection;
