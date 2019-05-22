const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    pinned: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);