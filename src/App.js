import { useState } from 'react';
import './App.css';

import SearchSectionContainer from './components/containers/search-section/SearchSectionContainer';
import SearchResultsSectionContainer from './components/containers/search-results-section/SearchResultsSectionContainer';
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
        <SearchSectionContainer setSearchResults={setSearchResults} />
        <div id='split-view'>
          <SearchResultsSectionContainer searchResults={searchResults} addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
          <PlaylistSectionContainer addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
        </div>
      </main>
    </>
  );
};

export default App;
