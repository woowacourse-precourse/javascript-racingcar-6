import { GAME_RULE } from "../Constant";
import { MissionUtils as MU } from "@woowacourse/mission-utils";

export const pickProgressRandomBool = () => {
  const [MIN, MAX] = [
    GAME_RULE.MIN_RANDOM_NUM_INCLUSIVE,
    GAME_RULE.MAX_RANDOM_NUM_INCLUSIVE,
  ];
  const randomValue = MU.Random.pickNumberInRange(MIN, MAX);
  return Boolean(GAME_RULE.MIN_NUM_TO_PROGRESS <= randomValue);
};

export const getWinnerArray = (cars) => {
  const maxScore = getMaxProgress(cars);
  return getMaxProgressCars(cars, maxScore);
};

const getMaxProgress = (cars) =>
  Math.max(...Array.from(cars, (car) => car.progress));
const getMaxProgressCars = (cars, maxScore) =>
  cars.filter((car) => car.progress === maxScore).map((car) => car.name);
