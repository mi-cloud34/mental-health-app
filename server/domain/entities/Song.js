

class Song {
    constructor({ id, title, artist, image, songLink }) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.image = image;
        this.songLink = songLink;
    }
}

module.exports = Song;