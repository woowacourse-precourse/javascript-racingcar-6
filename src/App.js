import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './car.js';
import RacingGame from "./race.js";
import Victory from "./award.js";



class App {
  async play() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNamesInput.split(',').map(name => name.trim());

    if ( carNames.some(name => name === null || name === undefined || name.length > 5)) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다. 게임 종료");
    }

    const cars = carNames.map(name => new Car(name));
    cars.forEach(car => {
      car.position = '';
    });
    const raceCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n');

    if ( isNaN(raceCount) || raceCount === 0 ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 게임 종료");
    }

    MissionUtils.Console.print("\n실행 결과");
    const racingGame = new RacingGame();

    for (let i = 0; i < raceCount; i++){
      racingGame.race(cars);
      cars.forEach(car => {
        MissionUtils.Console.print(car.name + ' : ' + car.position);
      });
      MissionUtils.Console.print('\n');
    }

    const victory = new Victory();
    victory.compare(cars);
  }    
}

export default App;