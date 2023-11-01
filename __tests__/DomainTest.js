import { Random } from '@woowacourse/mission-utils';
import Car from '../src/domain/Car';
import { GAME_RULE_NUMBER } from '../src/constant/Constants.js';
import RaceGame from '../src/domain/RaceGame';

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
  describe('RaceGame Class 테스트', () => {
    let cars;
    let tryNum;
    let raceGame;
    beforeEach(() => {
      cars = ['woni', 'pobi', 'chan'];
      tryNum = 5;
      raceGame = new RaceGame(cars, tryNum);
    });
    test('각 자동차들은 tryNum만큼 gameTry를 실행해야 한다.', () => {
      cars.forEach((name) => {
        const car = raceGame.cars.find((c) => c.name === name);
        car.move = jest.fn();
      });
      raceGame.gameTry();

      raceGame.cars.forEach((car) => {
        expect(car.move).toHaveBeenCalledTimes(tryNum);
      });
    });

    test('우승자가 두 명 이상이면 쉼표로 구분하여 출력한다.', () => {
      raceGame.cars[0].progress = 5;
      raceGame.cars[1].progress = 3;
      raceGame.cars[2].progress = 5;

      expect(raceGame.checkWinner()).toBe('woni,chan');
    });
    test('우승자가 한 명이면 그대로 출력한다.', () => {
      raceGame.cars[0].progress = 5;
      raceGame.cars[1].progress = 7;
      raceGame.cars[2].progress = 5;

      expect(raceGame.checkWinner()).toBe('pobi');
    });
  });
});
