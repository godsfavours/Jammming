import Track from "../track/Track";

function TrackList({ tracks }) {
    return (
        <ul>
            {tracks.map(track => <li key={track.title} ><Track title={track.title} artist={track.artist} /></li>)}
        </ul>
    );
};

export default TrackList;