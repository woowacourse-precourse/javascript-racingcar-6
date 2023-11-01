import { Console, Random } from '@woowacourse/mission-utils';

// 난수 생성
let computer = [];
const newNumber = () => {
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

// 입력 값 예외 처리
const userNumCheck = async () => {
  let userNumber;
  const userNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
  userNumber = userNum.trim();
  const userNumSet = new Set(userNum.split(""));

  if (userNum.length !== 3 || userNum.includes('0') || userNumSet.size !== 3 || isNaN(parseInt(userNumber))) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  } else {
    return userNumber;
  }

}

const inputCar = async () => {
  let cars = Array();

  try {
    cars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    cars = cars.split(',');
    const err = cars.some((item) => { return item.length > 5; });
    cars = [...new Set(cars)];
    if (cars.length === 1) {
      throw new Error("[ERROR] 쉼표로 구분하지 않았거나, 경주할 차가 부족합니다.");
    }
    if (err) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    return cars;

  } catch (e) {
    throw new Error(e);
  }
}

const inputNum = async () => {
  let num = 0;

  try {
    num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    num = parseInt(num);

    if (isNaN(num) || num < 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return num;

  } catch (e) {
    throw new Error(e);
  }
}

const Game = (cars, num) => {
  Console.print("\n실행 결과");

  let result = Array(cars.length);
  let numResult = Array(cars.length);
  result.fill("");

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < cars.length; j++) {
      let randomNum = Random.pickNumberInRange(0, 9);

      if (result[j] == "") {
        numResult[j] = 0;
      }

      if (randomNum >= 4) {
        result[j] += "-".repeat(1);
        numResult[j] = result[j].length;
      }

      Console.print(cars[j] + " : " + result[j] + "\n");
    }
  }

  return allResult;
}

const printResult = (cars, resultGame) => {
  const MAX_RESULT = Math.max.apply(null, numResult);
  let winner = Array();

  for (let i = 0; i < cars.length; i++) {
    if (numResult[i] === MAX_RESULT) {
      winner.push(cars[i]);
    }
  }

  Console.print("최종 우승자" + " : " + winner.join(","));
}

class App {
  async play() {
    const CARS = await inputCar();
    const NUM = await inputNum();
    const RESULTGAME = await Game(CARS, NUM);
    printResult(CARS, RESULTGAME);
  }
}

export default App;
