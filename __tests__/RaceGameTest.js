import { Random, Console } from '@woowacourse/mission-utils';
import Car from '../src/domain/Car';
import RaceGame from '../src/domain/RaceGame.js';
import { GAME_RULE_NUMBER } from '../src/constant/Constants.js';
import {
  printProgressProcess,
  printWinnerList,
  printProgressResult,
  printEmptyLine,
  getCarNameList,
  getTryNum,
} from '../src/util/Utils.js';
import App from '../src/App.js';

describe('게임 기능 테스트', () => {
  describe('Car Class 테스트', () => {
    let car;
    beforeAll(() => {
      car = new Car('woni');
      Random.pickNumberInRange = jest.fn();
    });
    test('move()는 기준 숫자보다 랜덤 숫자가 작으면 전진', () => {
      Random.pickNumberInRange.mockReturnValue(
        GAME_RULE_NUMBER.thresholdNum + 1,
      );
      car.move();
      car.move();
      car.move();
      expect(car.getProgress()).toBe(3);
    });

    test('move()는 기준 숫자보다 랜덤 숫자가 작으면 정지', () => {
      Random.pickNumberInRange.mockReturnValue(
        GAME_RULE_NUMBER.thresholdNum - 1,
      );
      car.move();
      expect(car.getProgress()).toBe(3);
    });

    test('getName()은 인스턴스의 name을 반환', () => {
      expect(car.getName()).toBe('woni');
    });
    test('getProgress()는 인스턴스의 progress를 반환', () => {
      expect(car.getProgress()).toBe(3);
    });
  });
});

describe('유틸 기능 테스트', () => {
  describe('입력 값 반환 테스트', () => {
    beforeAll(() => {
      Console.readLineAsync = jest.fn();
    });
    test('입력한 차 이름 반환', async () => {
      const inputs = 'woni,pobi,chan,han,hun';
      Console.readLineAsync.mockResolvedValue(inputs);
      const result = await getCarNameList();
      expect(result).toEqual(['woni', 'pobi', 'chan', 'han', 'hun']);
    });

    test('시도 횟수 입력', async () => {
      const expectedTryNum = '5';
      Console.readLineAsync.mockResolvedValue(expectedTryNum);
      const result = await getTryNum();
      expect(result).toBe(expectedTryNum);
    });
  });
});
