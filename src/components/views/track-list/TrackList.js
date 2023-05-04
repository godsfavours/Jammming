import TrackCardContainer from '../containers/track-card/TrackCardContainer';

import './TrackList.css';

function TrackList({ tracks, section, trackClickCallback }) {
    return (
        <ul className="track-list">
            {tracks.map(track => <li key={track.id} ><TrackCardContainer track={track} section={section} clickCallback={trackClickCallback} /></li>)}
        </ul>
    );
};

export default TrackList;