import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    const { chance, carNameList } = await getInput();
    playGame(chance, carNameList);
  }
}

async function getInput() {
  try {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carNameList = carNames.split(",");
    const isUnderFiveCharacter = carNameList.every(
      (name) => name.trim().length <= 5
    );
    if (/[^a-zA-Z0-9,]/.test(carNames) || !isUnderFiveCharacter) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }

    const chance = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    if (!/^[1-9]\d*$/.test(chance)) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }

    return { chance, carNameList };
  } catch (error) {
    throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
  }
}

function playGame(chance, carNameList) {
  let runningCars = new Array(carNameList.length).fill(0);
  Console.print("\n실행 결과");
  for (let i = 0; i < chance; i++) {
    updateCars(runningCars);
    printCars(runningCars, carNameList);
  }
  printWinner(runningCars, carNameList);
}

function updateCars(runningCars) {
  for (let i = 0; i < runningCars.length; i++) {
    let number = Random.pickNumberInRange(1, 9);
    if (number >= 4) {
      runningCars[i] += 1;
    }
  }
}

function printCars(runningCars, carNameList) {
  for (let i = 0; i < runningCars.length; i++) {
    let running = "";
    for (let j = 0; j < runningCars[i]; j++) {
      running += "-";
    }
    Console.print(`${carNameList[i]} : ${running}`);
  }
  Console.print(" ");

}

function printWinner(runningCars, carNameList) {
  const cars = runningCars.map((run, idx) => ({ name: carNameList[idx], run}));

  const maxRunner = Math.max(...cars.map((car) => car.run));
  const winners = cars.filter((car) => car.run === maxRunner);
  const result = winners.map((car) => car.name).join(", ");
  
  Console.print(`최종 우승자 : ${result}`);
}

export default App;
