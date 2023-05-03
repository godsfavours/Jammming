import TrackList from "../track-list/TrackList";

function Playlist({ addedTracks }) {
    return (
        <section>
            <h3>Create Playlist</h3>
            {addedTracks.length > 0 ? (
                <>
                    <TrackList tracks={addedTracks} />
                    <button>Save to Spotify</button>
                </>
            ) : 'Add a track to create playlist.'}
        </section>
    )
}

export default Playlist;