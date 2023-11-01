import { Console } from '@woowacourse/mission-utils';
import { Messages } from '../constants/Messages.js';

const DisplayView = {
  printRaceState(cars) {
    const roundResults = cars.map((car) => {
      const currentState = '-'.repeat(car.getCarDistance());

      return `${car.getCarName()} : ${currentState}`;
    });

    roundResults.forEach((result) => Console.print(result));
    Console.print('');
  },

  printChampions(championCars) {
    const champions = championCars.map((car) => car.getCarName()).join(', ');

    Console.print(`${Messages.FINAL_CHAMPIONS} ${champions}`);
  },
};

export default DisplayView;
