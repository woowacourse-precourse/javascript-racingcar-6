import { isforwardNumber } from '../src/utils';

describe('전진값 여부 함수 테스트', () => {
  test('랜덤값이 4이상이 나오면 true를 반환해야 한다.', () => {
    const randoms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answer = [false, false, false, false, true, true, true, true, true, true];
    
    answer.forEach((answer, i) => {
      expect(isforwardNumber(randoms[i])).toEqual(answer);
    });
  });
});