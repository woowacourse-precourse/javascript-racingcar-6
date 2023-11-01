//@ts-check

import { Console } from "@woowacourse/mission-utils";
import { ReadLineError } from "../utils/error.js";
import {
  assertNameValid,
  assertTryAmountValid,
  assertUniqueNameIn,
} from "../utils/validity.js";
import { splitNamesFrom } from "../utils/parse.js";

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

  assertNamesAreValid(names);
  assertUniqueNameIn(names);

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
 *
 * @param {Record<string, number>} scoreboard
 */
export function printResultUsingScoreBoard(scoreboard) {
  const SCORE_UNIT = "-";

  Object.entries(scoreboard).forEach(([name, score]) => {
    Console.print(`${name} : ${SCORE_UNIT.repeat(score)}`);
  });

  Console.print("");
}

export function printResultTitle() {
  Console.print("\n실행 결과");
}

/**
 *
 * @param {string[]} winners
 */
export function printWinners(winners) {
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}

/**
 *
 * @param {string[]} names
 */
function assertNamesAreValid(names) {
  names.forEach((name) => {
    assertNameValid(name);
  });
}
