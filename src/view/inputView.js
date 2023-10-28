import { Console } from "@woowacourse/mission-utils";
import validation from "../utils/validation";

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

export { inputCarName, inputTrials };
