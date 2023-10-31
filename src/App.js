import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  #name;
  #position;
  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  tryGoingForward(randomValue) {
    if (randomValue >= 4) this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
class App {
  async play() {
    let cars = await setRaceCars();
    if (!checkCarNames(cars)) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.\n');
    let times = await setRaceTimes();
    if (times == NaN || times == 0) throw new Error('[ERROR] 이동 횟수가 잘못된 형식입니다.\n');
    race(cars, times);
    let winnerNames = getFinalWinners(cars);
    printFinalWinners(winnerNames);
  }
}

async function setRaceCars(){
  let carInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  let carStrings = carInput.split(',');
  let cars = [];
  for (let i = 0; i < carStrings.length; i++){
    const name = carStrings[i];
    const car = new Car(name);
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
  const name = car.getName();
  if (name.length > 5 || name.length == 0) {
    underRequirements = false;
  }
  return underRequirements;
}

async function setRaceTimes() {
  let times = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  times = parseInt(times);
  return times;
}

function race(cars, times) {
  MissionUtils.Console.print('실행 결과\n');
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
    const car = cars[i];
    const name = car.getName();
    const position = car.getPosition();
    let positionString = '-'.repeat(position);
    MissionUtils.Console.print(`${name} : ${positionString}\n`);
  }
  MissionUtils.Console.print('\n');
}

function getFinalWinners(cars) {
  let maxPosition = getMaxPosition(cars);
  let winnerNames = [];
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const position = car.getPosition();
    const name = car.getName();
    if (position >= maxPosition) winnerNames.push(name); 
  }
  return winnerNames;
}

function getMaxPosition(cars) {
  let maxPosition = 0;
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const position = car.getPosition();
    if ( position > maxPosition) maxPosition = position;
  }
  return maxPosition;
}

function printFinalWinners(winners) {
  let winnerString = winners.join(', ');
  MissionUtils.Console.print(`최종 우승자 : ${winnerString}`);
}

export default App;