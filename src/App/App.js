import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faEdit, faTrash, faPlus);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TrApp</h1>
      </header>
    </div>
  );
}

export default App;
