import { Console } from '@woowacourse/mission-utils';

// 랜덤 숫자 모듈
import RandomNumber from './utils/RandomNumber';

// 레이싱 경기 주최측 모듈
import RaceOrganizer from './view/RaceOrganizer';

// 상수 모듈
import { COMMENT, SPECIALCHARS, NUMBER } from './utils/Constants';

class RacingCar {
  createEntry(names) {
    const list = new Map();
    names.forEach((key) => list.set(`${key}`, ''));

    return list;
  }

  #reportRaceStatus(value, key, map) {
    if (RandomNumber.isGreaterThanFour()) {
      const currentValue = value + SPECIALCHARS.HYPHEN;

      map.set(key, currentValue);
      RaceOrganizer.talkToCarMovingForward(key, currentValue);
      return;
    }

    RaceOrganizer.talkToCarMovingForward(key, value);
  }

  #printLineBreak() {
    Console.print(SPECIALCHARS.LINE_BREAK);
  }

  moveForwardCar(entry, lap) {
    this.#printLineBreak();
    const participant = new Map(entry);
    let round = NUMBER.ONE;

    Console.print(COMMENT.GAME_RESULT);
    while (round <= lap) {
      participant.forEach(this.#reportRaceStatus);
      this.#printLineBreak();

      round += NUMBER.ONE;
    }

    return participant;
  }
}

export default RacingCar;
