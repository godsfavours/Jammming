function Track({ track, section, clickCallback }) {
    const buttonText = section === 'search-results' ? 'Add' : 'Remove';
    const handleClick = () => {
        clickCallback(track);
    };

    return (
        <>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    );
};

export default Track;