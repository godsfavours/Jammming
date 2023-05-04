import { SpotifyClientID, SpotifyClientSecret } from "../secret";

const getSpotifyAccessToken = async () => {
    let token_obj = JSON.parse(localStorage.getItem('spy_token'));
    if (token_obj && Date.now() < token_obj.expires_in_date) {
        return token_obj.access_token;
    }

    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${SpotifyClientID}&client_secret=${SpotifyClientSecret}`
    });
    token_obj = await res.json();
    token_obj.expires_in_date = Date.now() + token_obj.expires_in;
    localStorage.setItem('spy_token', JSON.stringify(token_obj));
    return token_obj.access_token;
};

export default getSpotifyAccessToken;