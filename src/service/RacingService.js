import { Track, User } from '../domain/index.js';

const RacingService = {
  getResult(names, lap) {
    const records = [];
    const users = Array.from(names, (name) => User.of(name));
    const track = Track.of(users, lap);

    while (!track.isEnd()) {
      track.processLap();
      records.push(track.getCurrentLapResult());
    }
    const winners = track.getCurrentWinners();

    return { records, winners };
  },
};

export default RacingService;
