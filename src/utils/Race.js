import Car from './Car.js'
import { MissionUtils } from "@woowacourse/mission-utils";

export default class Race {
  constructor (players) {
    this.cars = players.map(playerName => {
      const car = new Car(playerName);
      return car;
    });
  }

  // 경기 시작
  async compete (moveNumber) {
    MissionUtils.Console.print('실행결과');
    for (let i = 0; i < moveNumber; i++) {
      let tempResult = await this.printResult();
      await MissionUtils.Console.print('\n');
    }
  }
  async printResult () {
    await this.cars.forEach(async (car) => await car.moveForwards());
  }

  // 경기 종료
  async getWinner () {
    this.cars.sort((a,b) => {
      return b.distance - a.distance;
    })

    const winner = this.cars[0]
    const commonWinner = this.cars.filter(car => {
      return winner.distance == car.distance;
    })

    if (commonWinner.length==1) {
      return winner.name;
    } else {
      return commonWinner.map(v => v.name). join(', ');
    }
  }
}
