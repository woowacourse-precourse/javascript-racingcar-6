import { print } from "../utils/missionUtils.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
const WinnerAward = (cars, traceRoad) => {
  const maxDistance = CheckMaxDistance(traceRoad);
  const winner = FindWinner(cars, traceRoad, maxDistance);
  print(GAME_MESSAGE.GAME_WINNER + winner.join(", "));
};

const CheckMaxDistance = (traceRoad) => {
  let maxDistance = 0;
  for (let i = 0; i < traceRoad.length; i++) {
    if (traceRoad[i].length > maxDistance) {
      maxDistance = traceRoad[i].length;
    }
  }
  return maxDistance;
};

const FindWinner = (cars, traceRoad, maxDistance) => {
  const winner = [];
  for (let i = 0; i < traceRoad.length; i++) {
    if (traceRoad[i].length === maxDistance) {
      winner.push(cars[i]);
    }
  }
  return winner;
};

export { WinnerAward };
