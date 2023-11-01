import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameValidation, gameNumberValidation } from "./validation.js";

const Console = MissionUtils.Console;


async function carNameInput() {
  const userInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  try {
    carNameValidation(userInput);
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
  return userInput.split(",");
}

async function gameNumberInput() {
  const userInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  try {
    gameNumberValidation(userInput);
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
  return userInput;
}

export { carNameInput, gameNumberInput };