import { Console } from '@woowacourse/mission-utils';
import { MOVEMENT_STATUS } from '../constants/messagesConstants.js';

export function printLineBreak() {
  Console.print('');
}

export function printRaceStatusMessage() {
  Console.print(MOVEMENT_STATUS);
}
