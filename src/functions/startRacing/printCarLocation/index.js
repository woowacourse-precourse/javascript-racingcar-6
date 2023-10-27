import { Console } from '@woowacourse/mission-utils';

const printCarLocation = (racingResult) => {
  const locationInfoList = Object.entries(racingResult);

  locationInfoList.forEach(([carName, carLocation]) => {
    const progressBar = '-'.repeat(carLocation);
    Console.print(`${carName} : ${progressBar}`);
  });
};

export default printCarLocation;
