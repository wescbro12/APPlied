
import './App.css';
// import Home from './pages/Home';
import NewJobPage from './pages/NewJob';
import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <SignUpPage />
    </div>
  );
}

export default App;
