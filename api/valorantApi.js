const request = require('request');
const constants = require('../config/constants');
const header = {
    'X-Riot-Token': constants._valorantAPIKey,
}
module.exports = {
    getValorantContent: function() {
        const options = {
            hostname: constants._valorantAPIUrl,
            path: "/val/content/v1/contents",
            method: "GET"
        }
        return new Promise((resolve, reject) => {
            request(options.hostname + options.path, { headers: header, json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            })
        })
    }
}