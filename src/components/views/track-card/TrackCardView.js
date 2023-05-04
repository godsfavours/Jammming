import './TrackCardView.css';

function TrackCardView({ track, handleClick, buttonText }) {
    return (
        <article className="track-card">
            <div className="track-card-details">
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

export default TrackCardView;