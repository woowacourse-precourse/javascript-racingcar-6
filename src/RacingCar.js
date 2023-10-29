import RandomNumber from "./utils/RandomNumber.js";
import RaceOrganizer from "./view/RaceOrganizer.js";

class RacingCar {
  createEntry(names) {
    const list = new Map();
    names.forEach((key) => list.set(`${key}`, ""));

    return list;
  }

  #reportRaceStatus(value, key, map) {
    if (RandomNumber.isGreaterThanFour()) {
      const currentValue = value + "-";

      map.set(key, currentValue);
      RaceOrganizer.talkToCarMovingForward(key, currentValue);
      return;
    }

    RaceOrganizer.talkToCarMovingForward(key, value);
  }

  moveFowardCar(entry, lap) {
    const participant = new Map(entry);
    let round = 1;

    while (round <= lap) {
      participant.forEach(this.#reportRaceStatus);
      round += 1;
    }

    return participant;
  }
}

export default RacingCar;
