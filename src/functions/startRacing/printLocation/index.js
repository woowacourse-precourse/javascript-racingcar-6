import { Console, MissionUtils } from '@woowacourse/mission-utils';

const printCarLocation = (racingCarLocation) => {
  const locationInfoList = Object.entries(racingCarLocation);

  locationInfoList.forEach(([carName, carLocation]) => {
    const progressBar = '-'.repeat(carLocation);
    Console.print(`${carName} : ${progressBar}`);
  });
};

export default printCarLocation;
