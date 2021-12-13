const request = require('request');
const constants = require('../config/constants');
const header = {
    'X-Riot-Token': constants._valorantAPIKey,
}
module.exports = {
    getAccountByPuuid: function(puuid) {
        const options = {
            hostname: constants._valorantAPIUrl,
            path: "/riot/account/v1/accounts/by-puuid/" + puuid,
            method: "GET"
        }
        return new Promise((resolve, reject) => {
            request(options.hostname + options.path, { headers: header, json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            })
        })
    },
    getAccountByRiotId: function(gameName, tagLine) {
        const options = {
            hostname: constants._valorantAPIUrl,
            path: "/riot/account/v1/accounts/by-riot-id/" + gameName + "/" + tagLine,
            method: "GET"
        }
        return new Promise((resolve, reject) => {
            request(options.hostname + options.path, { headers: header, json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            })
        })
    },
    getAccountByAccessToken: function(accessToken) {
        const options = {
            hostname: constants._valorantAPIUrl,
            path: "/riot/account/v1/accounts/me",
            method: "GET"
        }
        const authHeader = { "Authorization": accessToken };
        return new Promise((resolve, reject) => {
            request(options.hostname + options.path, { headers: {...header, ...authHeader }, json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            })
        })
    },
    getPlayerActiveShard: function(game, puuid) {
        const options = {
            hostname: constants._valorantAPIUrl,
            path: "/riot/account/v1/active-shards/by-game/" + game + "/by-puuid/" + puuid,
            method: "GET"
        }
        return new Promise((resolve, reject) => {
            request(options.hostname + options.path, { headers: header, json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            })
        })
    },
}