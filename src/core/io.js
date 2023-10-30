//@ts-check

import { Console } from "@woowacourse/mission-utils";
import { ReadLineError } from "../utils/error.js";

/**
 * @va
 * @returns { Promise<string[]> }
 */
export async function askNames() {
  let nameString = "";

  try {
    nameString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  } catch (error) {
    throw new ReadLineError();
  }

  return nameString.split(",");
}
