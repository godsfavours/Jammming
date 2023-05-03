import { useState } from 'react';
import './App.css';

import SearchBar from './components/search-bar/SearchBar';
import SearchResults from './components/search-results/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([{
    title: 'Hello'
  }, {
    title: 'World'
  }, {
    title: '!'
  }]);

  const onSearchSong = (userInput) => {
    console.log(userInput);
  }

  return (
    <section>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <section id="search-sn">
          <h2>Search <span className='spotify-text'>Spotify</span></h2>
          <SearchBar onSearchSong={onSearchSong} />
        </section>
        <section>
          <SearchResults searchResults={searchResults} />
        </section>
      </main>
    </section>
  );
}

export default App;
