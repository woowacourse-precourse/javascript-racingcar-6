import Car from './Car.js'
import { MissionUtils } from "@woowacourse/mission-utils";

export default class Race {
  constructor (players) {
    this.cars = players.map( playerName => {
      const car = new Car(playerName);
      return car;
    })
  }

  async compete (moveNumber) {
    console.log('실행결과');

    for(let i = 0; i < moveNumber; i++){
      let tempResult = await this.printResult();
      await MissionUtils.Console.print('\n');
    }
  }

  async handleMoveForwards (car) {
    return await car.moveForwards();
  }

  async printResult () {
    await this.cars.forEach( car => this.handleMoveForwards(car));
  }
}

