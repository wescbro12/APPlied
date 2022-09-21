
import './App.css';
// import Home from './pages/Home';

import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom'
import Update from './pages/EditJob';
import SignUpPage from './pages/SignupPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import NewJobPage from './pages/NewJobPage/NewJob';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/JobDetails';


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <LogInPage />


      {/* {user ?
        <>
          <Routes>
            <Route path="/jobs" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/jobs/new" element={<NewJobPage user={user} setUser={setUser} />} />
            <Route path="/jobs/:id" element={<Details user={user} setUser={setUser} />} />
            <Route path="/jobs/:id/edit" element={<Update user={setUser} setUser={setUser} />} />
            <Route path="/jobs/login" element={<LogInPage user={user} setUser={setUser} />} />
            <Route path="/jobs/signup" element={<SignUpPage user={user} setUser={setUser} />} />


            <Route path="/*" element={<Navigate to="/jobs" />} />
          </Routes>
        </>
        :
        <Home />
      } */}


    </main >
  );
}

export default App;
