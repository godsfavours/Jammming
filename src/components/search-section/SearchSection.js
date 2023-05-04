import React, { useState } from "react";
import './SearchSection.css';
import searchSpotify from "../../modules/spotify-api/searchSpotify";

function Search({ setSearchResults }) {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const onSearchTracks = async () => {
        let tracks = await searchSpotify(input);
        if (!tracks) {
            alert('The search failed due to an unexpected error.');
            return;
        }

        tracks = tracks.map(track => {
            let artists = track.artists.reduce((artistsString, currentArtist) => {
                return artistsString += currentArtist.name + ', ';;
            }, '');
            artists = artists.slice(0, -2); // remove ', '

            return {
                image_src: track.album.images[0],
                artists,
                name: track.name,
                id: track.id,
                uri: track.uri
            }
        });

        setSearchResults(tracks);
    };

    return (
        <section id="search-sn">
            <h2>Search <span className='spotify-text'>Spotify</span></h2>
            <input type="text" placeholder="Enter song name" onInput={inputHandler} />
            <button onClick={onSearchTracks}>Search</button>
        </section>
    );
};

export default Search;