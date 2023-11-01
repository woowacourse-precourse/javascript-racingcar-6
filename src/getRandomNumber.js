import { Random } from '@woowacourse/mission-utils';

export default async function getRandomNumber(score) {
  const randomNumber = await Random.pickNumberInRange(0, 9);
  return randomNumber < 4 ? score : score + 1;
}
