import React from 'react';
import DefaultHeader from './components/DefaultHeader';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SignUpCard from './components/SignUpCard';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <SearchBar />
      <SignUpCard />
      <Tweet />
      <Footer />
    </div>
  );
}

export default App;
