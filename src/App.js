
import './App.css';
// import Home from './pages/Home';
import NewJobPage from './pages/NewJob';
import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import LogInPage from './pages/LogInPage';
import Update from './pages/EditJob';
import SignUpPage from './pages/SignupPage/SignUpPage';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <SignUpPage />
    </div >
  );
}

export default App;
