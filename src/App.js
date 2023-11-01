import { Console } from "@woowacourse/mission-utils"
import Race from "./Race.js";
import Cars from "./Cars.js";
import RaceNumber from "./RaceNumber.js";
class App {
  async play() {
    const carNamesString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const cars= new Cars(carNamesString);

    const numberString = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const number = new RaceNumber(numberString)

    Console.print('\n');
    
    const race = new Race(cars.cars,number.number);
    race.start();
  }
}

export default App;
