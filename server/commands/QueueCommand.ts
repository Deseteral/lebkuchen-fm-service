import CommandDefinition from '../domain/CommandDefinition';
import IoConnection from '../clients/IoConnection';
import Song from '../domain/Song';
import SongRepository from '../repositories/SongRepository';
import QueueEventMessage from '../domain/event-messages/QueueEventMessage';

async function queue(songName: string) : Promise<string> {
  const song: Song = await SongRepository.getByName(songName);

  if (!song) {
    const youtubeId = songName.split(' ')[0];
    const unknownSong: Song = {
      name: 'Niespodzianka',
      youtubeId,
      trimStartSeconds: null,
      trimEndSeconds: null,
      timesPlayed: 0,
    };

    const eventMessage: QueueEventMessage = { song: unknownSong };
    IoConnection.broadcast('queue', eventMessage);
    return Promise.resolve(`Dodano film o id ${youtubeId} do kolejki`);
  }

  const eventMessage: QueueEventMessage = { song };
  IoConnection.broadcast('queue', eventMessage);
  return `Dodano ${song.name} do kolejki`;
}

const commandDefinition: CommandDefinition = {
  key: 'queue',
  process: queue,
  helpMessage: 'Dodaje do kolejki utwór z bazy, a jeżeli go tam nie ma trakuje frazę jako YouTube ID', // tslint:disable
};

export default commandDefinition;
