import Car from '../src/model/Car';
import formatOutput from '../src/utils/formatOutput';
import getRandomNumber from '../src/utils/getRandomNumber';

describe('유틸 함수 테스트', () => {
  describe('formatOutPut 테스트', () => {
    test('makeRoundMessage 테스트 - 경주 라운드 결과를 문자열 형태로 반환', () => {
      const cars = [new Car('a'), new Car('b'), new Car('c')];
      cars[0].forward();
      cars[0].forward();
      cars[1].forward();
      const result = formatOutput.makeRoundMessage(cars);
      expect(result).toBe('a : --\nb : -\nc : \n');
    });

    test('findWinningCars 테스트 - 가장 많이 전진한 자동차 반환', () => {
      const cars = [new Car('a'), new Car('b'), new Car('c')];
      cars[0].forward();
      cars[0].forward();
      cars[1].forward();
      const result = formatOutput.findWinningCars(cars);
      expect(result).toEqual(['a']);
    });

    test('makeWinnerMessage 테스트 - 최종 우승자 이름 및 출력 메세지를 조합해 결과 출력 문자열 반환', () => {
      const winners = ['a', 'b', 'c'];
      const result = formatOutput.makeWinnerMessage(winners);
      expect(result).toBe('최종 우승자 : a, b, c');
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
