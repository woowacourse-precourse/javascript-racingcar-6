import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    const { chance, carNameList } = await getInput();
    Console.print(carNameList);
    playGame(chance, carNameList);
  }
}

async function getInput() {
  try {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carNameList = carNames.split(",");
    const isUnderFiveCharacter = carNameList.every((name) => name.trim().length <= 5);
    if (/[^a-zA-Z0-9,]/.test(carNames) || !isUnderFiveCharacter) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }

    const chance = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    if (!/^[1-9]\d*$/.test(chance)) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }

    return { chance, carNameList };
  } catch (error) {
    throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
  }
}

// 1. 입력받은 횟수만큼 경주를 반복한다.
// 2. 경주할 자동차들을 담을 배열을 생성한다.
// 3. updateCars 함수를 호출하여 자동차 배열을 갱신시킨다.
// 4. printCars 함수를 호출하여 업데이트한 배열을 출력한다.

function playGame(chance, carNameList) {
  let runningCars = new Array(carNameList.length).fill(0);
  updateCars(runningCars);
  printCars(runningCars, carNameList);
}

function updateCars(runningCars) {

}

function printCars(runningCars, carNameList) {

}


export default App;
