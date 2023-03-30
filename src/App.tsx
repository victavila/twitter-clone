import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInModal from './components/LogInModal';
import SignUpModal from './components/SignUpModal';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Profile from './pages/Profile';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Explore />}>
            <Route path="/signup" element={<SignUpModal />}/>
            <Route path="/login" element={<LogInModal />}/>
          </Route>
          <Route path="/userName" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
