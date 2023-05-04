import TrackList from "../track-list/TrackList";
import './Playlist.css';

function Playlist({ addedTracks, onRemoveTrack, onCreatePlaylist }) {
    const submitHandler = (event) => {
        event.preventDefault();
        const playlistTitle = event.target.elements.title.value;
        onCreatePlaylist(playlistTitle);
    };

    return (
        <section id="playlist-sn">
            <h3>Create a Playlist</h3>
            {addedTracks.length > 0 ? (
                <>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Playlist name" name="title" required />
                        <TrackList tracks={addedTracks} section="playlist" trackClickCallback={onRemoveTrack} />
                        <input type="submit" value="Save to Spotify" />
                    </form>
                </>
            ) : 'Add a track to create a playlist.'}
        </section>
    );
}

export default Playlist;