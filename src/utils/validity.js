//@ts-check

import { ALPHABET, NAME_LENGTH_LIMIT, NUMBERS } from "./const.js";
import { InvalidPlayerNameError, TryAmountError } from "./error.js";

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
 * @param {string[]} names
 */
export function assertUniqueNameIn(names) {
  const uniqueNames = new Set(names);
  if (uniqueNames.size !== names.length)
    throw new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_DUPLICATED);
}

/**
 *
 * @param {number} amount
 */
export function assertTryAmountValid(amount) {
  if (!isFinite(amount))
    throw new TryAmountError(TryAmountError.TYPE_NOT_INTEGER);
  if (!Number.isInteger(amount))
    throw new TryAmountError(TryAmountError.TYPE_NOT_INTEGER);
  if (amount < 1)
    throw new TryAmountError(TryAmountError.TYPE_IS_SMALL_THAN_ONE);
}

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
