import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let carsInfo = {};

    const carNameList = (await inputCarNames()).split(",");
    checkNames(carNameList);

    const roundNumber = await inputRoundNumber();
    checkNumber(roundNumber);

    createObject(carNameList, carsInfo);

    Console.print("\n실행 결과");

    for (let n = 0; n < roundNumber; n++) {
      oneRoundGame(carsInfo);
      Console.print("\n");
    }

    printResult(carsInfo);
  }
}

async function inputCarNames() {
  const carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return carNames;
}

async function inputRoundNumber() {
  return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
}

export function checkNames(carNameList) {
  if (carNameList.length === 1) {
    throw new Error("[ERROR] 최소 2개의 자동차 이름을 입력해주세요");
  }

  const nameSet = new Set();

  for (let i = 0; i < carNameList.length; i++) {
    const carName = carNameList[i];

    if (carName.trim().length === 0 || carName.length > 5) {
      throw new Error("[ERROR] 사용할 수 없는 이름입니다");
    }

    if (nameSet.has(carName)) {
      throw new Error(`[ERROR] 중복된 자동차 이름을 입력했습니다.`);
    }

    nameSet.add(carName);
  }
}

export function checkNumber(roundNumber) {
  const number = parseFloat(roundNumber);

  if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    throw new Error("[ERROR] 양수인 정수를 입력해주세요");
  }
}

function randomNumber() {
  const number = Random.pickNumberInRange(0, 9);
  return number;
}

function createObject(carNameList, carsInfo) {
  for (let j = 0; j < carNameList.length; j++) {
    carsInfo[carNameList[j]] = { score: 0 };
  }
}

function oneRoundGame(carsInfo) {
  const carNames = Object.keys(carsInfo);
  for (let k = 0; k < carNames.length; k++) {
    const number = randomNumber();
    if (number >= 4) {
      carsInfo[carNames[k]].score += 1;
    }
  }

  carNames.forEach((carName) => {
    const score = carsInfo[carName].score;
    Console.print(`${carName} : ${"-".repeat(score)}`);
  });
}

function printResult(carsInfo) {
  let winners = [];
  let maxScore = 0;
  const carNames = Object.keys(carsInfo);
  carNames.forEach((carName) => {
    const score = carsInfo[carName].score;
    if (score > maxScore) {
      maxScore = score;
      winners = [carName];
    } else if (score === maxScore) {
      winners.push(carName);
    }
  });
  Console.print("최종 우승자 : " + winners.join(", "));
}

export default App;
