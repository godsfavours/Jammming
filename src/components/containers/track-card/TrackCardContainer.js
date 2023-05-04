import TrackCardView from "../../views/track-card/TrackCardView";

function TrackCardContainer({ track, section, clickCallback }) {
    const buttonText = section === 'search-results' ? 'Add' : 'Remove';
    const handleClick = () => clickCallback(track);

    return <TrackCardView track={track} handleClick={handleClick} buttonText={buttonText} />
};

export default TrackCardContainer;