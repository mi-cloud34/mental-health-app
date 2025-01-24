const Song = require("../../domain/entities/Song");
const { getAllSongs } = require("../../infrastructure/db/queries/songQueries");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetSongs extends UseCaseInterface {
  async execute() {
    const songRows = await getAllSongs();
    return songRows.map(song => new Song(
      {
        id: song.id,
        title: song.title,
        artist: song.artist,
        image: song.image,
        songLink: song.songLink,
      }));
  }
}

module.exports = GetSongs;