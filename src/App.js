import { MissionUtils } from '@woowacourse/mission-utils';
import Car from "./Car.js";
class App {
  async play() {
    let players = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    let round = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const playerArray = players.split(",");
    const cars = [];

    for (let player of playerArray) {
      if (player.length>5){
        throw new Error('[ERROR] 5자리 이하의 이름만 가능합니다.');
      }
      const car = new Car(player);
      cars.push(car);
    }
    await MissionUtils.Console.print("실행 결과")
    for (let i =0; i<round;i++) {
      for(let car of cars) {
        car.run();
      }
    }

    
  }
}

export default App;
