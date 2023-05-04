import { useState } from 'react';
import './App.css';

import SearchSection from './components/search-section/SearchSection';
import SearchResultsSection from './components/search-results-section/SearchResultsSection';
import PlaylistSectionContainer from './components/containers/playlist-section/PlaylistSectionContainer';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedTracks, setAddedTracks] = useState([]);

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchSection setSearchResults={setSearchResults} />
        <div id='split-view'>
          <SearchResultsSection searchResults={searchResults} addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
          <PlaylistSectionContainer addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
        </div>
      </main>
    </>
  );
};

export default App;
