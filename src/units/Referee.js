import * as F from "../utility/utilityFunctions.js";

class Referee {
  constructor() {}

  getWinners(carObjects) {
    let winnerList = [];

    const maxPosition = Math.max(...carObjects.map((car) => car.position));

    if (maxPosition === 0) throw new Error("[ERROR] 우승자가 없습니다.");

    winnerList = F.go(
      carObjects,
      F.filter((car) => car.position === maxPosition),
      F.map((car) => car.name),
    );

    return winnerList;
  }
}

export default Referee;
