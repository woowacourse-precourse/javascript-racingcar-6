import Result from '../src/Result.js';
import { Console } from '@woowacourse/mission-utils';

describe('Result 클래스 테스트', () => {
  let result;

  beforeEach(() => {
    result = new Result();
    jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  describe('determineWinner 메서드', () => {
    test('carDictionary를 받아서 최종 우승자를 반환', () => {
      const carDictionary = { car1: 3, car2: 5, car3: 2 };
      const winners = result.determineWinner(carDictionary);
      expect(winners).toEqual(['car2']);
    });
  });

  describe('printWinner 메서드', () => {
    test('우승자를 출력', () => {
      const winners = ['car1', 'car2'];
      result.printWinner(winners);
      jest.spyOn(Console, 'print').mockImplementation(() => {});
      expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car2');
    });
  });
});
