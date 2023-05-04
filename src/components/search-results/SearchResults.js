import React from "react";
import "./SearchResults.css";
import TrackList from "../track-list/TrackList";

function SearchResults({ searchResults, addedTracks, setAddedTracks }) {
    const onAddTrack = trackToAdd => {
        if (addedTracks.find(track => track.id === trackToAdd.id)) return;
        setAddedTracks(addedTracks => [...addedTracks, trackToAdd]);
    };

    return (
        <section id="search-results-sn">
            <h2>Search Results</h2>
            {searchResults.length > 0 ? <TrackList tracks={searchResults} section="search-results" trackClickCallback={onAddTrack} /> : 'Search for a song using the section above.'}
        </section>
    );
};

export default SearchResults;