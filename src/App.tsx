import React from 'react';
import DefaultHeader from './components/DefaultHeader';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SignUpCard from './components/SignUpCard';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <SearchBar />
      <SignUpCard />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
