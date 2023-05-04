import { useState } from 'react';
import './App.css';

import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';
import Playlist from './components/playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedTracks, setAddedTracks] = useState([]);

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <Search setSearchResults={setSearchResults} />
        <div id='split-view'>
          <SearchResults searchResults={searchResults} addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
          <Playlist addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
        </div>
      </main>
    </>
  );
}

export default App;
