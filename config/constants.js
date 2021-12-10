const dotenv = require('dotenv').config();

module.exports = {
    // host: process.env.HOSTNAME,
    _port: process.env.PORT,
    _valorantAPIKey: process.env.VALORANT_API_KEY,
    _valorantAPIUrl: process.env.VALORANT_API_URL
}