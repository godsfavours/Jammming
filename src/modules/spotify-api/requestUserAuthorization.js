// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow

import { SPOTIFY_CLIENT_ID } from "../../secret";
const redirectUri = 'http://localhost:3000/';

const AUTHORIZATION_SCOPES = 'playlist-modify-public playlist-modify-private';

// helper function to generate the code verifier 
const generateRandomString = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

// transform (hash) the code verifier using the SHA256 algorithm, to be sent within the user authorization request.
const generateCodeChallenge = async (codeVerifier) => {
    const base64encode = (string) => {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
};

const requestUserAuthorization = async () => {
    let codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    let state = JSON.stringify({
        redirectedFromSpotify: true,
    });
    localStorage.setItem('spotify_code_verifier', codeVerifier);

    let args = new URLSearchParams({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: AUTHORIZATION_SCOPES,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
    });

    window.location = 'https://accounts.spotify.com/authorize?' + args;
};

export default requestUserAuthorization;