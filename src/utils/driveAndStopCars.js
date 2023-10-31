import { Console, Random } from '@woowacourse/mission-utils';

const driveAndStopCars = car => {
  if (Random.pickNumberInRange(0, 9) >= 4) car.drive();

  Console.print(`${car.getName()} : ${car.getStatus().join('')}`);
};

export default driveAndStopCars;
