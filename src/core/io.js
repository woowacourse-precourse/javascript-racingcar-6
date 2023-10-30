//@ts-check

import { Console } from "@woowacourse/mission-utils";
import { ReadLineError } from "../utils/error.js";
import { assertNameValid, assertTryAmountValid } from "../utils/validity.js";

/**
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

  const names = splitNamesFrom(nameString);

  checkNamesAreValid(names);

  return names;
}

/**
 *
 * @returns {Promise<number>}
 */
export async function askTryAmount() {
  let amount = null;

  try {
    amount = parseInt(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
  } catch (error) {
    throw new ReadLineError();
  }

  assertTryAmountValid(amount);

  return amount;
}

/**
 * @param {string} nameString
 * @returns {string[]}
 */
function splitNamesFrom(nameString) {
  let names = nameString.split(",");
  names = names.map((name) => name.trim());
  return names;
}

/**
 *
 * @param {string[]} names
 */
function checkNamesAreValid(names) {
  names.forEach((name) => {
    assertNameValid(name);
  });
}

console.log(await askTryAmount());
