import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

async function inputCar() {
  let carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return carNames.split(",").map((value) => [value, 0]);
}

async function inputTrialNumber() {
  let trialNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return Number(trialNumber);
}

function moveOrStay(car) {
  for (let i = 0; i < car.length; i++) {
    let isMove = Random.pickNumberInRange(0, 9) < 5 ? true : false;
    if (isMove) {
      car[i][1] += 1;
    }
  }
}

function numToBar(num) {
  let bar = "";
  for (let i = 0; i < num; i++) {
    bar += "-";
  }
  return bar;
}

function printResult(car) {
  for (let i = 0; i < car.length; i++) {
    Console.print(car[i][0] + " : " + numToBar(car[i][1]));
  }
}

class App {
  async play() {
    let car = await inputCar();
    let trialNumber = await inputTrialNumber();
    Console.print("\n실행 결과");
    for (let i = 0; i < trialNumber; i++) {
      moveOrStay(car);
      printResult(car);
      Console.print("\n");
    }
  }
}
export default App;
