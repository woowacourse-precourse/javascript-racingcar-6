import { Random, Console } from '@woowacourse/mission-utils';
import Input from '../domain/Input.js';

// const a = new INPUT();
Input.uswerInputCarName();

// 몇번 시도 할건지
// async function uswerInputCycle() {
//   let cycleSize = await Console.readLineAsync('몇번 시도 할까요?  :');
//   Console.print(cycleSize);
//   return cycleSize;
// }
// uswerInputCycle();

// 게임 시작
function forwardV1() {
  let dice = Random.pickNumberInRange(0, 9);
  return 4 <= dice;
}

function forwardV2(carName) {
  let straight = '-';
  let dice = Random.pickNumberInRange(0, 9);
  if (4 <= dice) {
    carName += straight;
  }
  return carName;
}

let straight = '-';

// const GAME_START = function (cycleSiz) {
//   for (let cycle = 0; cycle < cycleSize; cycle++) {
//     if (forwardV1()) {
//       CAR_NAMES[0] += straight;
//     }

//     CAR_NAMES[0] = forwardV2(CAR_NAMES[0]);

//     Console.print(CAR_NAMES[0]);
//   }
// };
