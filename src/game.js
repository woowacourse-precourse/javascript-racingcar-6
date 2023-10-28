import { Console, Random } from "@woowacourse/mission-utils";
import validation from "./validation";

const generateRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

const printResult = async (cars, trials) => {
  const randomNumber = generateRandomNumber();
  Console.print("실행 결과");
  Console.print(randomNumber);
  Console.print(cars);
  Console.print(trials);
  //   Console.print("name1 : ", "-");
  //   Console.print("name2 : ", "-");
  //   Console.print("name3 : ", "-");
};

const inputCarName = async () => {
  const input = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  Console.print(
    `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n${input}`
  );
  // 자동차 이름 5자 이상일 경우 예외처리
  const convertToArr = input.split(",");
  return convertToArr;
};

const inputTrials = async () => {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

  // 숫자가 아닌 경우 예외처리
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
