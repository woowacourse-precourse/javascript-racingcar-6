import { random } from "../util/RandomNum";
import { racingOutput } from "../views/OutputView";

export const runRace = (cars, count) => {
    const carNames = Object.keys(cars);

    for (let i = 0; i < count; i++) {
        const randomNums = random(carNames.length);
        carNames.forEach((carName, index) => {
          cars[carName] += randomNums[index] >= 4 ? 1 : 0;
        });
    }

    racingOutput(cars, count);
};