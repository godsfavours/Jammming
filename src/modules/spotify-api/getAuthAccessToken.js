import { SPOTIFY_CLIENT_ID } from "../../secret";
import requestUserAuthorization from "./requestUserAuthorization";

const redirectUri = 'http://localhost:3000/';


const getCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
}

const getCodeVerifier = () => {
    return localStorage.getItem('spotify_code_verifier');
}


const getAuthAccessToken = async () => {
    const authAccessToken = localStorage.getItem('spotify_auth_access_token');
    if (authAccessToken) {
        return authAccessToken;
    }

    const code = getCode();
    if (!code) {
        requestUserAuthorization();
        return;
    }
    const codeVerifier = getCodeVerifier();

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: SPOTIFY_CLIENT_ID,
        code_verifier: codeVerifier
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
    });
    if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
    }

    const data = await response.json();
    localStorage.setItem('spotify_auth_access_token', data.access_token);
    window.location.assign(redirectUri);
}

export default getAuthAccessToken;