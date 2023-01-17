import React from 'react';
import LogInModal from './components/LogInModal';
import SignUpModal from './components/SignUpModal';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="App">
      <Explore />
      <SignUpModal />
      {true ? <></> :<LogInModal></LogInModal>}
    </div>
  );
}

export default App;
