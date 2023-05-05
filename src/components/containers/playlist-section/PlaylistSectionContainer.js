import PlaylistSectionView from "../../views/playlist-section/PlaylistSectionView";
import savePlaylistToSpotify from "../../../modules/spotify-api/savePlaylistToSpotify";

function PlaylistSectionContainer({ addedTracks, setAddedTracks }) {
    const createPlaylist = async (name) => {
        try {
            const playlistID = await savePlaylistToSpotify(addedTracks, name);
            alert(`Successfully created playlist. You can listen to it at: https://open.spotify.com/playlist/${playlistID}`);
            setAddedTracks([]);
        } catch (e) {
            alert(`Something went wrong creating the playlist. Try again later.`);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const playlistTitle = event.target.elements.title.value;
        createPlaylist(playlistTitle);
    };

    const onRemoveTrack = trackToRemove => {
        setAddedTracks(addedTracks.filter(track => track.id !== trackToRemove.id));
    };

    return <PlaylistSectionView submitHandler={submitHandler} onRemoveTrack={onRemoveTrack} addedTracks={addedTracks} />
}

export default PlaylistSectionContainer;