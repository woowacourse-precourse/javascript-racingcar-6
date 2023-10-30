//@ts-check

import { ALPHABET, NAME_LENGTH_LIMIT, NUMBERS } from "./const";
import { InvalidPlayerNameError } from "./error";

/**
 *
 * @param {string} name
 */
export function assertNameValid(name) {
  name = name.trim();

  if (name.length > NAME_LENGTH_LIMIT)
    throw new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_LENGTH);
  if (name.includes(" "))
    throw new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_SPACE_BETWEEN);
  if (includesSpecialIn(name))
    throw new InvalidPlayerNameError(
      InvalidPlayerNameError.TYPE_CONTAINS_SPECIAL
    );
}

/**
 *
 * @param {number} amount
 */
export function assertTryAmountValid(amount) {}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function includesSpecialIn(str) {
  for (const char of str) {
    const isAlphabet = ALPHABET.includes(char);
    const isNumber = NUMBERS.includes(char);
    if (!isAlphabet && !isNumber) return true;
  }

  return false;
}
