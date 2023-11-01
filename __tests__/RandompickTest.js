import { pickRandomtoGo } from '../src/utils/CalLogic';
import { mockRandoms } from './ApplicationTest';

describe('랜덤 값 판단 테스트', () => {
  test('랜덤으로 뽑은 숫자가 4 이상일 경우 true를 반환', async () => {
    const inputs = [5, 3, 6, 7, 4, 5, 8, 1, 2];
    const outputs = [true, false, true, true, true, true, true, false, false];
    mockRandoms([...inputs]);

    outputs.forEach((output) => {
      expect(pickRandomtoGo()).toEqual(output);
    });
  });
});
