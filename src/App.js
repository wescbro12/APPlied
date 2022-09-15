
import './App.css';
// import Home from './pages/Home';

import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import Update from './pages/EditJob';
import SignUpPage from './pages/SignupPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import NewJobPage from './pages/NewJobPage/NewJob';


function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <NewJobPage />
    </div >
  );
}

export default App;
