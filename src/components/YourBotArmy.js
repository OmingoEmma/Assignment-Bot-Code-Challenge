import React from "react";
import BotSpecs from './BotSpecs';

function YourBotArmy({ bots, onDeselect }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <div key={bot.id}>
              <BotSpecs bot={bot} />
              <button onClick={() => onDeselect(bot)}>Release</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
