import './Track.css';

function Track({ track, section, clickCallback }) {
    const buttonText = section === 'search-results' ? 'Add' : 'Remove';
    const handleClick = () => {
        clickCallback(track);
    };

    return (
        <article className="track">
            <div className="track-details">
                <img src={track.image_src.url} />
                <section>
                    <h3>{track.name}</h3>
                    <p>{track.artists}</p>
                </section>
            </div>
            <button onClick={handleClick}>{buttonText}</button>
        </article>
    );
};

export default Track;