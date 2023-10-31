import { Console } from '@woowacourse/mission-utils';
import { isValidCarName, isValidPlayerInput } from '../utils/Validation.js';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';

export async function playerInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.playerInput);
  isValidPlayerInput(inputValue);
  return inputValue;
}

export async function carNameInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.playerCarName);
  isValidCarName(inputValue);
  return inputValue;
}

export function printStartResult() {
  return Console.print(MESSAGE_NOTIFICATION.startResult);
}

export function printMoveResult(name, advance) {
  return Console.print(`${name} : ${'-'.repeat(advance)}`);
}

export function printLine() {
  return Console.print('');
}

export function printRacingResult(winner) {
  return Console.print(`${MESSAGE_NOTIFICATION.racingResult}${winner}`);
}
