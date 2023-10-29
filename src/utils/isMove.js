import { Random } from '@woowacourse/mission-utils';

export default function isMove() {
  return Random.pickNumberInRange(0, 9) >= 4;
}
