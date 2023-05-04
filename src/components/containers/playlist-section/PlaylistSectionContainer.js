import PlaylistSectionView from "../../views/playlist-section/PlaylistSectionView";

function PlaylistSectionContainer({ addedTracks, setAddedTracks }) {
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

    return <PlaylistSectionView submitHandler={submitHandler} onRemoveTrack={onRemoveTrack} addedTracks={addedTracks} />
}

export default PlaylistSectionContainer;