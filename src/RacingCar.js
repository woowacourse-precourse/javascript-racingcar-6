import Random from "./utils/Random.js";
import RaceOrganizer from "./view/RaceOrganizer.js";

class RacingCar {
  #createEntry(names) {
    const list = new Map();
    names.forEach((key) => list.set(`${key}`, ""));

    return list;
  }

  #reportRaceStatus(key, value, map) {
    if (Random.getRandomNumber() >= 4) {
      const currentValue = value + "-";

      map.set(key, currentValue);
      RaceOrganizer.talkToCarMovingForward(key, currentValue);
      return;
    }

    RaceOrganizer.talkToCarMovingForward(key, value);
  }

  #moveFowardCar(entry, lap) {
    const round = 1;
    const participant = new Map(entry);

    while (round <= lap) {
      participant.forEach(this.#reportRaceStatus);
      round += 1;
    }

    return participant;
  }
}

export default RacingCar;
