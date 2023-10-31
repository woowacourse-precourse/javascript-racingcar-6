// 기능3. 랜덤값을 받아 자동차 이동
import { Console } from '@woowacourse/mission-utils';
import { random } from './Random.js';
import { repeat } from './Repeat.js';

export function movement(count, name, move) {
  let temp = move;
  for (let i = 0; i < count; i++) {
    let output = random(name);
    temp = repeat(name, move, output);
    Console.print(``);
  }
  return temp;
}
