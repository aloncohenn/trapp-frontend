import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Login />
        <SignUp />
      </header>
    </div>
  );
}

export default App;
