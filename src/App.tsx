import React from 'react';
import LogInModal from './components/LogInModal';
import TweetModal from './components/TweetModal';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home />
      <TweetModal />
      {true ? <></>: <LogInModal />}
    </div>
  );
}

export default App;
