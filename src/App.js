import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarName } from "./InputCarName.js";
import { vaildCarName } from "./ValidCarName.js";
import Car from "./Car.js";
import { validCount } from "./ValidCount.js";
import { inputCount } from "./InputCount.js";
import { moveCar } from "./MoveCar.js";
import { printCar } from "./printCar.js";
class App {
  async play() {
    const carNames = await inputCarName();

    const cars = carNames.split(',').map(name => {
      if(vaildCarName(name)) return new Car(name, 0);
    })

    let count = await inputCount();
    if(validCount(count)) count = Number(count);

    MissionUtils.Console.print('');

    cars.forEach(car => {
      car.move += moveCar();
    });

    cars.forEach(car => {
      printCar(car.name, car.move);
    })

    MissionUtils.Console.print('');
    
    



  }
}

const app = new App();
app.play();

export default App;
