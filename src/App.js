import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  name;
  position;
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  tryGoingForward(randomValue) {
    if (randomValue >= 4) this.position += 1;
  }
}
class App {
  async play() {
    let cars = await setRaceCars();
    if (!checkCarNames(cars)) throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.\n");
    let times = await setRaceTimes();
    if (times == NaN || times == 0) throw new Error("[ERROR] 이동 횟수가 잘못된 형식입니다.\n");
    race(cars, times);
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
  return cars;
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

async function setRaceTimes() {
  let times = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  times = parseInt(times);
  return times;
}

function race(cars, times) {
  MissionUtils.Console.print("실행 결과\n");
  for(let i = 0; i < times; i++) {
    checkProgression(cars);
    printProgression(cars);
  }
}

function checkProgression(cars) {
  // 모든 자동차가 랜덤값을 받고, 받은 값이 4 이상일 때 앞으로 이동
  for (let i = 0; i < cars.length; i++) {
    let randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    cars[i].tryGoingForward(randomValue);
  }
}

function printProgression(cars) {
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    let name = car.name;
    let position = car.position;
    let positionString = '-'.repeat(position);
    MissionUtils.Console.print(`${name} : ${positionString}\n`);
  }
  MissionUtils.Console.print("\n");
}

export default App;