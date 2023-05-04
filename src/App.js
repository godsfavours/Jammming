import { useState } from 'react';
import './App.css';

import SearchBar from './components/search-bar/SearchBar';
import SearchResults from './components/search-results/SearchResults';
import Playlist from './components/playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([{
    title: 'Hello',
    artist: 'Godsfavour'
  }, {
    title: 'World',
    artist: 'Simon'
  }, {
    title: '!',
    artist: 'Mouse'
  }]);
  const [addedTracks, setAddedTracks] = useState([]);

  const onSearchSong = (userInput) => {
    console.log(userInput);
  }

  return (
    <>
      <main>
        <h1>Jammming</h1>
        <section id="search-sn">
          <h2>Search <span className='spotify-text'>Spotify</span></h2>
          <SearchBar onSearchSong={onSearchSong} />
        </section>
        <div id='split-view'>
          <SearchResults searchResults={searchResults} />
          <Playlist addedTracks={addedTracks} />
        </div>
      </main>
    </>
  );
}

export default App;
