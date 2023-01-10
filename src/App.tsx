import React from 'react';
import DefaultHeader from './components/DefaultHeader';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
