const config = require('../config/app.config');


async function get() {
    const data = {
        message: 'Hello'
    }
    return data
}


async function post() {
    return
}


module.exports = {
    get,
    post
}