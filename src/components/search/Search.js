import React, { useState } from "react";

function Search({ onSearchSong }) {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const clickHandler = () => {
        onSearchSong(input);
    };

    return (
        <section id="search-sn">
            <h2>Search <span className='spotify-text'>Spotify</span></h2>
            <input type="text" placeholder="Enter song name" onInput={inputHandler} />
            <button onClick={clickHandler}>Search</button>
        </section>
    );
};

export default Search;