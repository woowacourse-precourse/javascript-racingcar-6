import Car from './Car.js';
import NumberGenerator from "./NumberGenerator.js"
import { MissionUtils } from "@woowacourse/mission-utils";

export default class Race {
  constructor (players) {
    this.cars = players.map(playerName => {
      const car = new Car(playerName);
      return car;
    });
  }

  // 경기 시작
  async repeat (moveNumber) {
    MissionUtils.Console.print('실행결과');
    for (let i = 0; i < moveNumber; i++) {
      await this.competeAll();
      await MissionUtils.Console.print('\n');
    }
  }

  async competeAll () { // 모든 차가 한 번씩 전진 혹은 정지
    await this.cars.forEach(async (car) => {
      const numberGenerator = new NumberGenerator();
      const randomNumber = await numberGenerator.getRandomNumber();
      const success = await car.isSuccess(randomNumber);
      const resultMessage = await car.getResultMessage(success);
      await MissionUtils.Console.print(resultMessage);
    });
  }

  // 경기 종료
  async getWinner () {
    this.cars.sort((a,b) => {
      return b.distance - a.distance;
    })

    const winner = this.cars[0];
    return winner;
  }

  async getCommonWinner (winner) {
    const commonWinner = this.cars.filter(car => {
      return winner.distance === car.distance;
    });

    return commonWinner.length === 1 
    ? winner.name 
    : commonWinner.map(v=>v.name).join(', ');
  }
}
