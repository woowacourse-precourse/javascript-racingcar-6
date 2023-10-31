//기능3의 랜덤값
import { MissionUtils } from '@woowacourse/mission-utils';

export function random() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    computer.push(number);
  }
  return computer;
}
