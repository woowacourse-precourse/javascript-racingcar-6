import { Random } from '@woowacourse/mission-utils';
import { num } from '../../../Constants';

function generateAdvanceConditions(racecarNames) {
  const advanceConditions = [];

  for (let i = 0; i < racecarNames.length; i++) {
    advanceConditions.push(Random.pickNumberInRange(num.LOWER_LIMIT, num.UPPER_LIMIT));
  }

  return advanceConditions;
}

export default generateAdvanceConditions;
