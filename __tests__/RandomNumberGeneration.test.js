import { Random } from '@woowacourse/mission-utils';
import generateRandomNumber from '../src/functions/generateRandomNumber.js';

test('랜덤 숫자 생성 시 Random.pickNumberInRange를 호출한다', () => {
  const randomSpy = jest.spyOn(Random, 'pickNumberInRange');
  generateRandomNumber();
  expect(randomSpy).toHaveBeenCalled();
});
