import './App.css';

import SearchBar from './components/search-bar/SearchBar';
function App() {
  const onSearchSong = (userInput) => {
    console.log(userInput);
  }

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <section id="search-sn">
          <h2>Search <span className='spotify-text'>Spotify</span></h2>
          <SearchBar onSearchSong={onSearchSong} />
        </section>
      </main>
    </>
  );
}

export default App;
