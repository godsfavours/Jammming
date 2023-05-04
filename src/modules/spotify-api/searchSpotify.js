import getAccessToken from "./getAccessToken";

const searchSpotify = async (query) => {
    if (!query) return;
    try {
        const token = await getAccessToken();
        const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            return data.tracks.items;
        }
        throw new Error('Request to search for tracks failed.');
    } catch (error) {
        console.error(error);
    }
};

export default searchSpotify;