import { useState } from "react";

import searchSpotify from "../../../modules/spotify-api/searchSpotify";
import SearchSectionView from "../../views/search-section/SearchSectionView";

function SearchSectionContainer({ setSearchResults }) {
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

    return <SearchSectionView inputHandler={inputHandler} onSearchTracks={onSearchTracks} />
};

export default SearchSectionContainer;