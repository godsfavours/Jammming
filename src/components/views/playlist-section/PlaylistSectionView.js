import TrackList from '../../track-list/TrackList';
import './PlaylistSectionView.css';

function PlaylistSectionView({ addedTracks, submitHandler, onRemoveTrack }) {
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

export default PlaylistSectionView;