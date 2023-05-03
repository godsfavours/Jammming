import React, { useState } from "react";

function SearchBar({ onSearchSong }) {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const clickHandler = () => {
        onSearchSong(input);
    }

    return (
        <>
            <input type="text" placeholder="Enter song name" onInput={inputHandler} />
            <button onClick={clickHandler}>Search</button>
        </>
    )
};

export default SearchBar;