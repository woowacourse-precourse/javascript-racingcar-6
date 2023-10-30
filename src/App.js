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
    const carNames = await inputCarName();

    const cars = carNames.split(',').map(name => {
      if(vaildCarName(name)) return new Car(name, 0);
    })

    let count = await inputCount();
    if(validCount(count)) count = Number(count);

    MissionUtils.Console.print('');

    for(let i=0; i<count; i++){
      cars.forEach(car => {
        car.move += moveCar();
      });
  
      cars.forEach(car => {
        printCar(car.name, car.move);
      })

      MissionUtils.Console.print('');
    }
    
    result(cars);
    
  }
}

export default App;
