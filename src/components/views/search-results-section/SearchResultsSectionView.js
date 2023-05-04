import React from "react";
import "./SearchResultsSectionView.css";
import TrackList from "../../track-list/TrackList";

function SearchResultsSectionView({ searchResults, onAddTrack }) {
    return (
        <section id="search-results-section">
            <h2>Search Results</h2>
            {searchResults.length > 0 ? <TrackList tracks={searchResults} section="search-results" trackClickCallback={onAddTrack} /> : 'Search for a song using the section above.'}
        </section>
    );
};

export default SearchResultsSectionView;