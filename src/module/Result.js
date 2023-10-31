import { MissionUtils } from '@woowacourse/mission-utils';
import moveCar from './Process.js';

const printFinish = (carData, userCount) => {
  MissionUtils.Console.print('');
  MissionUtils.Console.print('실행 결과');
  for (let i = 0; i < userCount; i += 1) {
    moveCar(carData);
    Object.entries(carData).forEach(([name, distance]) => {
      MissionUtils.Console.print(`${name} : ${distance}`);
    });
    MissionUtils.Console.print('');
  }
  const maxDistance = Math.max(
    ...Object.values(carData).map(distance => distance.length),
  );
  const winners = Object.keys(carData).filter(
    name => carData[name].length === maxDistance,
  );
  const winnerString = winners.join(', ');
  MissionUtils.Console.print(`최종 우승자 : ${winnerString}`);
};

export default printFinish;
