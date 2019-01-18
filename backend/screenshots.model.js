const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let screenshots = new Schema({
    screenshots_blob: {
        type: String
    },
    screenshots_seq: {
        type: String
    },
    screenshots_sessionId: {
        type: String
    }
});

module.exports = mongoose.model('screenshots', screenshots);