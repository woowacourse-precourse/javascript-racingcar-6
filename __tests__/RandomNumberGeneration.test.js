import { Random } from '@woowacourse/mission-utils';
import RaceManager from '../src/RaceManager';

test('랜덤 숫자 생성 시 Random.pickNumberInRange를 호출한다', () => {
  const randomSpy = jest.spyOn(Random, 'pickNumberInRange');
  RaceManager.generateRandomNumber();
  expect(randomSpy).toHaveBeenCalled();
});
