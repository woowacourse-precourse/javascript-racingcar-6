import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

async function inputCar() {
  let car = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  isValidCarName(car);
  return car.split(",").map((value) => [value, 0]);
}

async function inputTrialNumber() {
  let trialNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  isValidTrialNumber(trialNumber);
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

function printWinner(car) {
  let winnerCount = Math.max(...car.map((tuple) => tuple[1]));
  let winners = [];
  for (let i = 0; i < car.length; i++) {
    if (car[i][1] == winnerCount) {
      winners.push(car[i][0]);
    }
  }
  if (winners.length == 1) {
    Console.print("최종 우승자 : " + winners[0]);
  } else {
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

function isValidCarName(car) {
  let carName = car.split(",");
  let isNameTooLong = false;
  for (let name of carName) {
    if (name.length > 5) {
      isNameTooLong = true;
      break;
    }
  }
  if (isNameTooLong) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
  }
}

function isValidTrialNumber(trialNumber) {
  let isNumber = Number.isNaN(trialNumber);
  if (isNumber) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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
    printWinner(car);
  }
}
export default App;
