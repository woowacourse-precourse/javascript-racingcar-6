//테스트할 함수파일명.test.js 네이밍
import { inputCars, makeHash } from '../src/racingCars/playGame';
import { Random, Console } from '@woowacourse/mission-utils';

test('문자열을 쉼표를 구분해 객체를 만듭니다', async () => {
  const cars = '테슬라,자전거';
  return expect(makeHash(cars)).toEqual({
    테슬라: 0,
    자전거: 0,
  });
});
