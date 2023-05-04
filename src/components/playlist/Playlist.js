import TrackList from "../track-list/TrackList";
import './Playlist.css';

function Playlist({ addedTracks, onRemoveTrack }) {
    return (
        <section id="playlist-sn">
            <h3>Create Playlist</h3>
            {addedTracks.length > 0 ? (
                <>
                    <TrackList tracks={addedTracks} section="playlist" trackClickCallback={onRemoveTrack} />
                    <button>Save to Spotify</button>
                </>
            ) : 'Add a track to create playlist.'}
        </section>
    )
}

export default Playlist;