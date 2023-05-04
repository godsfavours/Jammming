import getSpotifyAccessToken from "./getSpotifyAccessToken";

const searchSpotify = async (query) => {
    if (!query) return;
    const token = await getSpotifyAccessToken();
    const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data.tracks.items;
};

export default searchSpotify;