import { Random } from '@woowacourse/mission-utils';

export default async function getRandomNumber(score) {
  const RANDOM_NUMBER = await Random.pickNumberInRange(0, 9);
  return RANDOM_NUMBER < 4 ? score : score + 1;
}
