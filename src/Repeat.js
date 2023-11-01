//기능4. 횟수만큼 반복
import { Console } from '@woowacourse/mission-utils';
import { forward } from './Forward.js';

export function repeat(name, move, output) {
  for (let v = 0; v < name.length; v++) {
    forward(output, move, v);
    Console.print(`${name[v]} : ${'-'.repeat(move[v])}`);
  }
  return move;
}
