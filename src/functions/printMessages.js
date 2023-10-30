import { Console } from '@woowacourse/mission-utils';
import { RACE_STATUS } from '../constants/messagesConstants.js';

export function printLineBreak() {
  Console.print('');
}

export function printRaceStatusMessage() {
  Console.print(RACE_STATUS);
}
