import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "../../secret";

// Gets the access token which contains the credentials and permissions that can be used to access a given resource
// https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token
const getAccessToken = async () => {
    let token_obj = JSON.parse(localStorage.getItem('spotify_access_token'));
    if (token_obj && Date.now() < token_obj.expires_in_date) {
        return token_obj.access_token;
    }

    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_SECRET
    });

    try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body
        });

        if (res.ok) {
            token_obj = await res.json();
            token_obj.expires_in_date = Date.now() + token_obj.expires_in;
            localStorage.setItem('spotify_access_token', JSON.stringify(token_obj));
            return token_obj.access_token;
        }
        throw new Error('Request to get access token failed.');
    } catch (error) {
        console.error(error);
    }
};

export default getAccessToken;