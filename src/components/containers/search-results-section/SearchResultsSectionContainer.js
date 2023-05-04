import React from "react";
import SearchResultsSectionView from "../../views/search-results-section/SearchResultsSectionView";

function SearchResultsSectionContainer({ searchResults, addedTracks, setAddedTracks }) {
    const onAddTrack = trackToAdd => {
        if (addedTracks.find(track => track.id === trackToAdd.id)) return;
        setAddedTracks(addedTracks => [...addedTracks, trackToAdd]);
    };

    return <SearchResultsSectionView searchResults={searchResults} onAddTrack={onAddTrack} />
};

export default SearchResultsSectionContainer;