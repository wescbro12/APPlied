
import './App.css';
// import Home from './pages/Home';
import NewJobPage from './pages/NewJob';
import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import Update from './pages/EditJob';
import SignUpPage from './pages/SignupPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';


function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <NewJobPage />
    </div >
  );
}

export default App;
