import React from "react";

function SearchResults({ searchResults }) {
    const searchResultComponents = searchResults.map(song => {
        return <p key={song.title}>{song.title}</p>
    });

    return (
        <section>
            <h2>Search Results</h2>
            {searchResults.length > 0 ? searchResultComponents : 'No Search Results.'}
        </section>
    );
};

export default SearchResults;