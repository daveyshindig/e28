export { default as Favorites } from './Favorites';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/daveyshindig/e28',
    // TODO: Deprecate my-json-server and use the SoundCloud API instead
    // soundCloudPublicKey: '148c7eaeb24ced32ba89b5c8cca7e1cf', 
    // playlist: 'https://api.soundcloud.com/playlists/948380188?client_id=' + soundCloudPublicKey,
    player: 'https://w.soundcloud.com/player/api.js'
}