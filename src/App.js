import {MissionUtils} from "@woowacourse/mission-utils";
/*
### 기능 목록

1. 자동차 수에 맞는 이름 입력✅

- 이름은 ','로 구분, 5자 이하만, 유효성 검사

2. 시도 횟수 입력✅

- 숫자 입력 및 유효성 검사

3. 각 차량의 전진을 저장 기능✅

4. 게임 진행✅

- 각 차량에 랜덤한 수 배정
- 배정된 수가 4이상이면 전진

5. 게임 진행도 출력✅

6. 우승자 확인✅


*/
const {Console, Random} = MissionUtils;

class App {
  async play() {
    const progress = {};
    const cars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)").then((names) => names.split(","));
    cars.forEach((name) => checkNameValidation(name));

    initProgress(progress, cars);

    const inputCount = await Console.readLineAsync("시도할 횟수:");
    checkInputCount(inputCount);
    const attemptCount = Number(inputCount);

    Console.print("실행 결과");

    startRace(cars, attemptCount, progress);

    checkWinner(progress);
  }
}

export default App;

const startRace = (cars, attemptCount, progress) => {
  for (let count = 1; count <= attemptCount; count++) {
    cars.forEach((car) => countProgress(progress, car));
    printProgress(progress);
  }
};

const countProgress = (progress, car) => {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) progress[car]++;
};

const initProgress = (progress, carNames) => {
  for (let car of carNames) {
    progress[car] = 0;
  }
};
//TODO 중복 제거
const checkNameValidation = (name) => {
  if (!name) throw Error("[ERROR]");
  if (name.length > 5) throw Error("[ERROR]");
};

const checkInputCount = (inputCount) => {
  if (!inputCount) throw Error("[ERROR]");
  if (!typeof inputCount === "string" || isNaN(inputCount)) throw Error("[ERROR]");
};

const printProgress = (progress) => {
  let total = "";
  for (let car in progress) {
    const progressbar = "-".repeat(Number(progress[car]));
    total += car + " : " + progressbar + "\n";
  }
  Console.print(total);
};

const checkWinner = (progress) => {
  const winners = [];
  const maxCount = Math.max(...Object.values(progress));
  for (let car in progress) {
    if (progress[car] === maxCount) winners.push(car);
  }
  Console.print("최종 우승자 : " + winners.join(", "));
};
