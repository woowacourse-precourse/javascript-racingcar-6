import { Track, User } from '../domain/index.js';

const RacingService = {
  getResult(names, lap) {
    const record = [];
    const users = Array.from(names, (name) => User.of(name));
    const track = Track.of(users, lap);

    while (!track.isEnd()) {
      track.processLap();
      record.push(track.getCurrentLapResult());
    }
    const winners = track.getCurrentWinners();

    return { record, winners };
  },
};

export default RacingService;
