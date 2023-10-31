import { MissionUtils } from '@woowacourse/mission-utils';
import moveCar from './Process.js';

const printFinish = (carData, userCount) => {
  MissionUtils.Console.print('');
  MissionUtils.Console.print('실행 결과');
  let moveCarData = {};
  for (let i = 0; i < userCount; i += 1) {
    moveCarData = moveCar(carData);
    Object.entries(moveCarData).forEach(([name, distance]) => {
      MissionUtils.Console.print(`${name} : ${distance}`);
    });
    MissionUtils.Console.print('');
  }
  const maxDistance = Math.max(
    ...Object.values(moveCarData).map(distance => distance.length),
  );
  const winners = Object.keys(moveCarData).filter(
    name => moveCarData[name].length === maxDistance,
  );
  const winnerString = winners.join(', ');
  MissionUtils.Console.print(`최종 우승자 : ${winnerString}`);
};

export default printFinish;
