import { Console } from '@woowacourse/mission-utils';

const DisplayView = {
  printRaceState(cars) {
    const roundResults = cars.map((car) => {
      const currentState = '-'.repeat(car.getCarDistance());

      return `${car.getCarName()} : ${currentState}`;
    });

    roundResults.forEach((result) => Console.print(result));

    Console.print('');
  },
};

export default DisplayView;
