import { MissionUtils } from '@woowacourse/mission-utils';

export default class PlayRound {
  playRound(cars, round) {
    for(let i = 0; i < round; i++) {
      cars.forEach((car) => car.carMove());
    }
    
    cars.forEach((car) => {
      const movement = '-'.repeat(car.getMovement());
      MissionUtils.Console.print(`${car.getName()} : ${movement}`);
    })
  }
}