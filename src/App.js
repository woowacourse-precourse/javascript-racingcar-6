import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarName } from "./input/InputCarName.js";
import { vaildCarName } from "./validator/ValidCarName.js";
import { validCount } from "./validator/ValidCount.js";
import { inputCount } from "./input/InputCount.js";
import { moveCar } from "./game/MoveCar.js";
import { printCar } from "./game/PrintCar.js";
import { result } from "./game/Result.js";
import Car from "./Car.js";

class App {
  async play() {
    // 자동차 이름 입력 받기
    const carNames = await inputCarName();

    // 자동차 이름 유효 판별
    const cars = carNames.split(',').map(name => {
      if(vaildCarName(name)) return new Car(name, 0);
    })

    // 시도 횟수 입력 받기
    let count = await inputCount();

    // 시도 횟수 유효 판별
    if(validCount(count)) count = Number(count);

    MissionUtils.Console.print('');

    for(let i=0; i<count; i++){
      // 자동차 전진 판단
      cars.forEach(car => {
        car.move += moveCar();
      });
      
      // 자동차 화면 출력
      cars.forEach(car => {
        printCar(car.name, car.move);
      })

      MissionUtils.Console.print('');
    }
    
    // 우승자 출력
    result(cars);
    
  }
}

export default App;
