export { default as Favorites } from './Favorites';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/daveyshindig/e28',
    player: 'https://w.soundcloud.com/player/api.js'
}

export let store = {
    favoriteCount: 0
}