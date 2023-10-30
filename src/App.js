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
    if (!checkCarNames(cars)) throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.\n");
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

function checkCarNames(cars) {
  let validName = true;
  // 모든 자동차의 이름 길이가 규격에 맞는지 확인
  for (let i = 0; i < cars.length; i++) {
    validName = validName && checkNameLength(cars[i]);
  }
  return validName;
}

function checkNameLength(car) {
  let underRequirements = true;
  let name = car.name;
  if (name.length > 5 || name.length == 0) {
    underRequirements = false;
  }
  return underRequirements;
}

export default App;