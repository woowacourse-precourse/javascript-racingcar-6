import { Random, Console } from '@woowacourse/mission-utils';
import CONSTANTS from './Constants';
import { RACE } from './Logs';

class RaceUtils {
  static shouldMoveForward() {
    const pickedNumber = Random.pickNumberInRange(
      CONSTANTS.MIN_NUM,
      CONSTANTS.MAX_NUM,
    );
    return pickedNumber >= CONSTANTS.IS_FORWARD;
  }

  static moveCarForward(player) {
    const updatedTrackLocation = player.trackLocation.concat(RACE.PROGRESS_BAR);
    return { ...player, trackLocation: updatedTrackLocation };
  }

  static findWinners(playersData) {
    const farthestTrackLocation = Math.max(
      ...playersData.map(player => player.trackLocation.length),
    );
    return playersData
      .filter(player => player.trackLocation.length === farthestTrackLocation)
      .map(player => player.playerName);
  }

  static announceWinners(winners) {
    Console.print(RACE.WINNERS + winners.join(', '));
  }

  static proceedEachRaceTurn(playersData) {
    return playersData.map(player => {
      if (this.shouldMoveForward()) {
        return this.moveCarForward(player);
      }
      return player;
    });
  }

  static printRaceStatus(playersData) {
    let raceStatus = '';
    playersData.forEach(player => {
      raceStatus += `${player.playerName} : ${player.trackLocation}\n`;
    });
    Console.print(raceStatus);
  }
}

export default RaceUtils;
