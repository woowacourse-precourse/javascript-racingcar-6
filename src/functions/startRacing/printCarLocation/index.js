import { MissionUtils } from '@woowacourse/mission-utils';

const printCarLocation = (racingResult) => {
  Object.entries(racingResult).forEach(([carName, carLocation]) => {
    const progressBar = '-'.repeat(carLocation);
    MissionUtils.Console.print(`${carName} : ${progressBar}`);
  });
  MissionUtils.Console.print('\n');
};

export default printCarLocation;
