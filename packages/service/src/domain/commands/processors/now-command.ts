import SongService from '../../songs/song-service';
import * as EventStreamService from '../../../event-stream/event-stream-service';
import Command from '../model/command';
import CommandProcessingResponse, { makeSingleTextProcessingResponse } from '../model/command-processing-response';
import CommandDefinition from '../model/command-definition';
import { AddSongNow } from '../../../event-stream/model/events';

async function nowCommandProcessor(command: Command): Promise<CommandProcessingResponse> {
  const songName = command.rawArgs;
  const song = await SongService.instance.getSongByNameWithYouTubeIdFallback(songName);

  const eventData: AddSongNow = { id: 'AddSongNow', song };
  EventStreamService.sendToEveryone(eventData);

  SongService.instance.incrementPlayCount(song.youtubeId, song.name);

  return makeSingleTextProcessingResponse(`Dodano "${song.name}" do stosu`, false);
}

const queueCommandDefinition: CommandDefinition = {
  key: 'now',
  shortKey: 'now',
  processor: nowCommandProcessor,
  helpMessage: 'Dodaje na początek utwór z bazy, a jeżeli go tam nie ma trakuje frazę jako YouTube ID',
  helpUsages: [
    '<video name or youtube-id>',
    'transatlantik',
    'p28K7Fz0KrQ',
  ],
};

export default queueCommandDefinition;
