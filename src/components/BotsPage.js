import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch('/bots')
     .then(response => response.json())
     .then(data => setBots(data));
  }, []);

  const handleBotSelect = (bot) => {
    setSelectedBots([...selectedBots, bot]);
  };

  const handleBotDeselect = (bot) => {
    setSelectedBots(selectedBots.filter((b) => b.id!== bot.id));
  };

  return (
    <div>
      <YourBotArmy bots={selectedBots} onDeselect={handleBotDeselect} />
      <BotCollection bots={bots} onSelect={handleBotSelect} />
    </div>
  );
}

export default BotsPage;
