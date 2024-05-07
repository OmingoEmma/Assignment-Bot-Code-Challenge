import React, { useState } from "react";

function BotSpecs({ bot }) {
  console.log("Rendering BotSpecs for bot:", bot);
  const [isEnlisted, setIsEnlisted] = useState(false);

  const handleEnlist = () => {
    setIsEnlisted(true);
  };

  return (
    <div className="ui card" style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
      <div className="content">
        <div className="header">{bot.name}</div>
        <div className="meta">
          <span className="date">{bot.bot_class}</span>
        </div>
        <div className="description">
          <p>{bot.catchphrase}</p>
          <div className="ui segment">
            <div className="ui three column centered grid">
              <div className="row">
                <div className="column">
                  <i className="icon large circular red heartbeat" />
                  <strong>{bot.health}</strong>
                </div>
                <div className="column">
                  <i className="icon large circular yellow lightning" />
                  <strong>{bot.damage}</strong>
                </div>
                <div className="column">
                  <i className="icon large circular blue shield" />
                  <strong>{bot.armor}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <button className="ui button" onClick={handleEnlist} disabled={isEnlisted}>
          {isEnlisted ? "Enlisted" : "Enlist"}
        </button>
      </div>
    </div>
  );
}

export default BotSpecs;