import { Random } from '@woowacourse/mission-utils';

function RandomPick() {
  const random = Random.pickNumberInRange(0, 9);

  if (random >= 4) {
    return '-';
  }

  return '';
}

export default RandomPick;