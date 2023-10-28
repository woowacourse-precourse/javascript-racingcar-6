import { MissionUtils, Console } from '@woowacourse/mission-utils';

const INPUT_CAR_RACE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const TRY_COUNT = '시도할 횟수는 몇 회인가요?';
const PROCESS_RESULT = '실행 결과';
const ERROR_PREFIX = '[ERROR]';
const FINAL_WINNER = '최종 우승자';
export class Car {
  constructor(name, forWardCount) {
    this.name = name;
    this.forWardCount = forWardCount;
  }
}

class App {
  #carArray = [];
  #cycleCount;

  get carArray() {
    return this.#carArray;
  }

  async play() {
    await this.getCarInput();
    await this.getCycleCountInput();
    Console.print('');
    await this.startDriving();
    this.finalWinnerOutput();
  }

  async getCarInput() {
    Console.print(INPUT_CAR_RACE);
    const cars = await Console.readLineAsync('');
    this.carValidator(cars);
  }

  async getCycleCountInput() {
    Console.print(TRY_COUNT);
    const cycleCount = await Console.readLineAsync('');
    const convertNumber = Number(cycleCount);
    if (isNaN(convertNumber)) {
      throw new Error(`${ERROR_PREFIX} : 시도 횟수는 숫자이어야 합니다.`);
    }
    this.#cycleCount = convertNumber;
  }

  async startDriving() {
    Console.print(PROCESS_RESULT);
    while (this.#cycleCount != 0) {
      await this.processCycle();
      this.#cycleCount -= 1;
      Console.print('');
    }
  }

  async processCycle() {
    this.#carArray.forEach((car) => {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (number >= 4) {
        car.forWardCount += 1;
      }
      const forWardLength = '-'.repeat(car.forWardCount);
      Console.print(`${car.name} : ${forWardLength}`);
    });
  }

  finalWinnerOutput() {
    this.#carArray.sort((a, b) => b.forWardCount - a.forWardCount);

    const finalWinnerCars = this.#carArray
      .filter((car) => car.forWardCount === this.#carArray[0].forWardCount)
      .map((car) => car.name);
    let finalWinnerCarName = finalWinnerCars.join(', ');
    Console.print(`${FINAL_WINNER} : ${finalWinnerCarName}`);
  }

  carValidator(cars) {
    const carArray = cars.split(',');
    carArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(`${ERROR_PREFIX} : 자동차 이름은 5자리 이하만 가능합니다.`);
      }
      this.#carArray.push(new Car(carName, 0));
    });
  }
}

export default App;
