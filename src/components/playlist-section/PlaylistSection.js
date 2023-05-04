import TrackList from "../track-list/TrackList";
import './PlaylistSection.css';

function PlaylistSection({ addedTracks, setAddedTracks }) {
    const createPlaylist = (playlistTitle) => {
        console.log('adding playlist', playlistTitle, addedTracks);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const playlistTitle = event.target.elements.title.value;
        createPlaylist(playlistTitle);
    };

    const onRemoveTrack = trackToRemove => {
        setAddedTracks(addedTracks.filter(track => track.id !== trackToRemove.id));
    };

    return (
        <section id="playlist-section">
            <h2>Create a Playlist</h2>
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

export default PlaylistSection;