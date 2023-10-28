import { Console, Random } from "@woowacourse/mission-utils";
import validation from "./validation";

const generateRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

const printResult = async (cars, trials) => {
  Console.print("실행 결과");

  let map = new Map();
  for (let i = 0; i < cars.length; i++) {
    map.set(cars[i], 0);
  }

  for (let i = 0; i < trials; i++) {
    for (let j = 0; j < cars.length; j++) {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= 4) {
        map.set(cars[j], map.get(cars[j]) + 1);
      }
      Console.print(`${cars[j]} : ` + "-".repeat(map.get(cars[j])));
    }
  }
};

const inputCarName = async () => {
  const input = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const convertToArr = input.split(",");

  Console.print(
    `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n${input}`
  );

  for (let i = 0; i < convertToArr.length; i++) {
    if (convertToArr[i].length > 4) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  return convertToArr;
};

const inputTrials = async () => {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

  if (validation(input) !== "VALID") {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  Console.print(`시도할 횟수는 몇 회인가요? \n${input}`);
  return Number(input);
};

const game = async () => {
  const cars = await inputCarName();
  const trials = await inputTrials();
  printResult(cars, trials);
};

export default game;
