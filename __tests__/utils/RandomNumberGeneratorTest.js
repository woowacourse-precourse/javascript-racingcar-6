import { RANDOM_NUMBER_RANGE } from '../../src/constants/numberRange';
import RandomNumberGenerator from '../../src/utils/RandomNumberGenerator.js';

describe('class RandomNumberGenerator 테스트', () => {
  const randomNumberGenerator = new RandomNumberGenerator();

  describe('메서드 test : create()', () => {
    test('20번 실행했을때 모든 값들이 0과 9 사이인지 확인하는 테스트', () => {
      const randomNumbers = Array.from({ length: 20 }, () =>
        randomNumberGenerator.create(
          RANDOM_NUMBER_RANGE.MIN,
          RANDOM_NUMBER_RANGE.MAX
        )
      );
      const isValidRange = [...randomNumbers].every(
        (num) =>
          num >= RANDOM_NUMBER_RANGE.MIN && num <= RANDOM_NUMBER_RANGE.MAX
      );

      expect(isValidRange).toBe(true);
    });

    describe('메서드 test : createNumbers()', () => {
      test('length prameter에 입력한 길이만큼 랜덤한 숫자배열이 생성되는지 확인', () => {
        const LENGTH = 10;
        const randomNumbersArray = randomNumberGenerator.createNumbers(
          RANDOM_NUMBER_RANGE.MIN,
          RANDOM_NUMBER_RANGE.MAX,
          LENGTH
        );

        expect(randomNumbersArray).toHaveLength(LENGTH);
      });
    });
  });
});
