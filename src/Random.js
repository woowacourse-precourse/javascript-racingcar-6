//MoveMent에서 사용하는 랜덤값
import { MissionUtils } from '@woowacourse/mission-utils';

export function random(name) {
  const computer = [];
  for (let i = 0; i < name.length; i++) {
    computer.push(MissionUtils.Random.pickNumberInRange(0, 9));
  }
  return computer;
}
