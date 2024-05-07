import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BotsPage from './BotsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BotsPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
