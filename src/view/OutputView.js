import { Console } from '@woowacourse/mission-utils';

const OutputView = (message, cars) => {
  Console.print(message);
  cars.forEach((car) => {
    const distanceInDashes = '-'.repeat(car.distance);
    Console.print(`${car.name} : ${distanceInDashes}`);
  });
};
export default OutputView;
