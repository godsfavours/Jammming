import Track from "../track/Track";

function TrackList({ tracks }) {
    return (
        <ul>
            {tracks.map(track => <Track key={`track.title`} title={track.title} artist={track.artist} />)}
        </ul>
    );
};

export default TrackList;