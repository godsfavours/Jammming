import { useState } from 'react';
import './App.css';

import SearchBar from './components/search-bar/SearchBar';
import SearchResults from './components/search-results/SearchResults';
import Playlist from './components/playlist/Playlist';
import SearchSpotify from './modules/SearchSpotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedTracks, setAddedTracks] = useState([]);

  const onAddTrack = trackToAdd => {
    if (addedTracks.find(track => track.id === trackToAdd.id)) return;
    setAddedTracks(addedTracks => [...addedTracks, trackToAdd]);
  };

  const onRemoveTrack = trackToRemove => {
    setAddedTracks(addedTracks.filter(track => track.id !== trackToRemove.id));
  };

  const onCreatePlaylist = (playlistTitle) => {
    console.log('adding playlist', playlistTitle, addedTracks);
  };

  const onSearchSong = async (userInput) => {
    let tracks = await SearchSpotify(userInput);

    tracks = tracks.map(track => {
      let artists = track.artists.reduce((artistsString, currentArtist) => {
        return artistsString += currentArtist.name + ', ';;
      }, '');
      artists = artists.slice(0, -2); // remove ', '

      return {
        image_src: track.album.images[0],
        artists,
        name: track.name,
        id: track.id
      }
    });

    setSearchResults(tracks);
  };

  return (
    <>
      <main>
        <h1>Jammming</h1>
        <section id="search-sn">
          <h2>Search <span className='spotify-text'>Spotify</span></h2>
          <SearchBar onSearchSong={onSearchSong} />
        </section>
        <div id='split-view'>
          <SearchResults searchResults={searchResults} onAddTrack={onAddTrack} />
          <Playlist addedTracks={addedTracks} onRemoveTrack={onRemoveTrack} onCreatePlaylist={onCreatePlaylist} />
        </div>
      </main>
    </>
  );
}

export default App;
