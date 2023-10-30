import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  name;
  position;
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}
class App {
  async play() {
    let cars = await setRaceCars();
  }
}

async function setRaceCars(){
  let carInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  let carStrings = carInput.split(',');
  let cars = [];
  for (let i = 0; i < carStrings.length; i++){
    let name = carStrings[i];
    let car = new Car(name);
    cars.push(car);
  }
  return cars
}

export default App;