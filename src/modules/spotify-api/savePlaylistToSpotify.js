import getAuthAccessToken from "./getAuthAccessToken";

const getUserID = async (accessToken) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    if (!response.ok) {
        throw new Error('An error occurred fetching spotify user data');
    }
    const userData = await response.json();
    return userData.id;
};

const createPlaylist = async (accessToken, name) => {
    const userID = await getUserID(accessToken);
    const response = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name
        })
    });
    if (!response.ok) {
        throw new Error('Playlist creation request was rejected.');
    }
    const playlistData = await response.json();
    return playlistData.id;
};

const addTracksToPlaylist = async (accessToken, playlist_id, uris) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${uris}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error('Request to add track to playlist rejected.');
    }
};

const savePlaylistToSpotify = async (tracks, name) => {
    try {
        const accessToken = await getAuthAccessToken();
        const trackURIs = tracks.map(track => track.uri);
        const playlistID = await createPlaylist(accessToken, name);
        await addTracksToPlaylist(accessToken, playlistID, trackURIs);
        return playlistID;
    } catch (e) {
        throw e;
    }

};

export default savePlaylistToSpotify;