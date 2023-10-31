import Car from '../src/model/Car';
import getData from '../src/utils/getData';
import getRandomNumber from '../src/utils/getRandomNumber';

describe('유틸 함수 테스트', () => {
  describe('getData 테스트', () => {
    describe('getRoundData 테스트', () => {
      test('getRoundData 테스트', () => {
        const cars = [new Car('a'), new Car('b'), new Car('c')];
        cars[0].forward();
        cars[0].forward();
        cars[1].forward();
        const result = getData.getRoundData(cars);
        expect(result).toBe('a : --\nb : -\nc : \n');
      });
    });
    describe('getMaxForwardData 테스트', () => {
      test('getMaxForwardData 테스트', () => {
        const cars = [new Car('a'), new Car('b'), new Car('c')];
        cars[0].forward();
        cars[0].forward();
        cars[1].forward();
        const result = getData.getMaxForwardData(cars);
        expect(result).toEqual(['a']);
      });
    });

    describe('getWinnerData 테스트', () => {
      test('getWinnerData 테스트', () => {
        const winners = ['a', 'b', 'c'];
        const result = getData.getWinnerData(winners);
        expect(result).toBe('최종 우승자 : a, b, c');
      });
    });
  });

  describe('getRandomNumber 테스트', () => {
    test('난수 생성 테스트', () => {
      const result = getRandomNumber();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(9);
    });
  });
});
