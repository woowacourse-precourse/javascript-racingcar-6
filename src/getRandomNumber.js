import { Random } from '@woowacourse/mission-utils';

const getRandomNumber = async function getRandomNumberWithRandomUtil() {
  const RANDOM_NUMBER = await Random.pickNumberInRange(0, 9);

  return RANDOM_NUMBER;
}

export default getRandomNumber;