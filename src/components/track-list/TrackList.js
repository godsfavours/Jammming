import Track from "../track/Track";

function TrackList({ tracks, section, trackClickCallback }) {
    return (
        <ul>
            {tracks.map(track => <li key={track.id} ><Track track={track} section={section} clickCallback={trackClickCallback} /></li>)}
        </ul>
    );
};

export default TrackList;