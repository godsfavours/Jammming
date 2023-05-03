import React from "react";

import TrackList from "../track-list/TrackList";

function SearchResults({ searchResults }) {
    return (
        <section>
            <h2>Search Results</h2>
            {searchResults.length > 0 ? <TrackList tracks={searchResults} /> : 'No Search Results.'}
        </section>
    );
};

export default SearchResults;