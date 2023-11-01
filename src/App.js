import { Console, Random } from "@woowacourse/mission-utils";

class App {
  cars = [];
  ATTEMPTS_COUNT;

  async play() {
    await this.getCarNames();
    await this.AskAttemptsCount();
    const race = this.startRace();
    this.raceWinner(race);
  }
  
  async getCarNames() {
    const CAR_NAMES = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ")
    this.validateCarNames(CAR_NAMES)
  }

  validateCarNames(names) {
    if(names === "") {   
      throw new Error("[ERROR] 자동차 이름을 입력해주세요")
    }
    names = names.split(",");

    const DUPLICATE_NAME = new Set();
    const INVALID_REGEX = /[^a-zA-Z0-9가-힣]+/ 

    for (const name of names) { 
      if (name.trim() !== name ) {
        throw new Error("[ERROR] 이름에 중복을 제거해주세요")
      }
      if (name.length > 5) { 
        throw new Error("[ERROR] 자동차의 이름은 5글자 이하로 적어주세요")
      }
      if (DUPLICATE_NAME.has(name)) { 
        throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
      }
      if (INVALID_REGEX.test(name)) { 
        throw new Error("[ERROR] 이름에 특수문자를 제거해주세요.");
    }
      DUPLICATE_NAME.add(name);
    }
    
    this.cars = names;
  }

  async AskAttemptsCount() {
    await Console.print("시도할 횟수는 몇 회인가요?")
    const ATTEMPTS_COUNT_INPUT = await Console.readLineAsync("")
    this.validateCountInput(ATTEMPTS_COUNT_INPUT)
    this.ATTEMPTS_COUNT = ATTEMPTS_COUNT_INPUT 
  }

  validateCountInput(input) {
    const NUMBER = Number(input);
    if (isNaN(NUMBER) || typeof NUMBER !== 'number') {
        throw new Error("[ERROR] 시도할 횟수에는 숫자를 입력해주세요.");
    }
  }

  startRace() {
    const carsSet = new Set();
    this.cars.forEach((name) => {
      carsSet.add({ name, count: 0 });
    });

    for (let i = 0; i < this.ATTEMPTS_COUNT; i++) {
      this.moveCars(carsSet);
      this.printCarsProgress(carsSet);
    }

    return carsSet
  }

  moveCars(carsSet) {
    for (const car of carsSet) {
      car.count = this.updateCarPosition(car.count);
    }
  }

  updateCarPosition(count) {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    if (RANDOM_NUMBER >= 4) {
      count++;
    }
    return count;
  }

  printCarsProgress(carsSet) {
    for (const car of carsSet) {
      Console.print(`${car.name} : ${this.generateCarProgress(car.count)}`);
    }``
    Console.print('');
  }

  generateCarProgress(count) {
    if (count === 0) {
      return "";
    }
    return "-".repeat(count);
  }

  raceWinner(race) {
    const CAR_RACE = Array.from(race);
    const MAX_COUNT = Math.max(...CAR_RACE.map(car => car.count)); 
    const WINNERS = CAR_RACE
    .filter((car) => car.count === MAX_COUNT)
    .map((car) => car.name);

    this.raceWinnerPrint(WINNERS)
  }

  raceWinnerPrint(winner) {
    const WINNERS = winner.join(", ")
    Console.print(`최종 우승자 : ${WINNERS}`)
  }
}


export default App;
