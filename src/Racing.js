import { Console } from '@woowacourse/mission-utils';
import RandomPick from './RandomPick.js';

function Racing(car, n) {
  const forward = [];
  for(let i=0; i<car.length; i++){
    forward[i] = '';
  }
  Console.print('실행 결과');

  for (let i=0; i<n; i++) {
    for (let j=0; j<car.length; j++) {
      forward[j] = forward[j] + RandomPick();
      Console.print(`${car[j]} : ${forward[j]}`);
    }

    Console.print('');
  }

  return forward;
}

export default Racing;