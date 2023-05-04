import './SearchSectionView.css';

function SearchSectionView({ inputHandler, onSearchTracks }) {

    return (
        <section id="search-sn">
            <h2>Search <span className='spotify-text'>Spotify</span></h2>
            <input type="text" placeholder="Enter song name" onInput={inputHandler} />
            <button onClick={onSearchTracks}>Search</button>
        </section>
    );
};

export default SearchSectionView;