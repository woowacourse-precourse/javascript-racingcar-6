import { Random, Console } from '@woowacourse/mission-utils';
import {getCarsMovementInfo, getMovingResult, getWinners, hasMovedForward, printCarsMovementInfo} from '../src/game.js';

describe('게임 유틸', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  describe('hasMovedForward', () => {
    test('Random.pickNumberInRange 유틸이 4미만의 값을 반환한다면, false를 반환해야 한다', () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);
      expect(hasMovedForward()).toBe(false);
    })

    test('Random.pickNumberInRange 유틸이 4이상의 값을 반환한다면, true를 반환해야 한다', () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(5);
      expect(hasMovedForward()).toBe(true);
    })
  })

  describe('getMovingResult', () => {
    test('자연수를 입력하지 않으면, 에러를 반환해야 한다.', () => {
      expect(() => getMovingResult(-1)).toThrowError();
    })
    test('반환값은 모두 boolean 이어야 한다.', () => {
      const movingResult = getMovingResult(3);
      movingResult.forEach((result) => {
        expect(result).toEqual(expect.any(Boolean));
      })
    })
    test('입력한 자연수만큼의 길이를 갖는 배열을 반환해야한다.', () => {
      const count = 5;
      const movingResult = getMovingResult(count);
      expect(movingResult.length).toBe(count);
    })
  })

  describe('getCarsMovementInfo', () => {
    test('올바른 carNames와 count를 입력하면, 해당 carNames 요소들을 객체 key로 갖고 전진 여부 배열을 value로 갖는 object가 반환되어야 한다.', () => {
      const carNames = ['foo', 'bar'];
      const count = 5;
      const carsMovementInfo = getCarsMovementInfo(carNames, count);
      const carsMovementInfoKeys = Object.keys(carsMovementInfo);
      const carsMovementInfoValues = Object.values(carsMovementInfo);

      carNames.forEach(carName => {
        expect(carsMovementInfoKeys).toContain(carName);
      })

      carsMovementInfoValues.forEach(movingResult => {
        expect(movingResult.length).toBe(count);

        movingResult.forEach((result) => {
          expect(result).toEqual(expect.any(Boolean));
        })
      })
    })
  })

  describe('getWinners', () => {
    test('올바른 carsMovementInfo를 입력하면, 1명 이상의 우승자 이름을 담고 있는 배열을 반환해야 한다.', () => {
      const carNames = ['foo', 'bar'];
      const count = 5;
      const carsMovementInfo = getCarsMovementInfo(carNames, count);
      expect(getWinners(carsMovementInfo).length).toBeGreaterThanOrEqual(1);
    })
  })

  describe('printCarsMovementInfo', () => {
    function countOccurrences(inputString, search) {
      // 문자열에서 검색 문자열의 모든 등장 횟수를 세는 함수
      const regex = new RegExp(search, 'g');
      const matches = inputString.match(regex);
      return matches ? matches.length : 0;
    }

    test('올바른 carsMovementInfo 입력하면, 전진 횟수만큼 carName이 반복 노출되어야 한다', () => {
      const carNames = ['foo', 'bar'];
      const count = 5;
      const carsMovementInfo = getCarsMovementInfo(carNames, count);
      const printSpy = jest.spyOn(Console, 'print');

      printCarsMovementInfo(carsMovementInfo);
      const printOutput = printSpy.mock.calls.map((args) => args[0]).join('\n');
      carNames.forEach(carName => {
        expect(countOccurrences(printOutput, carName)).toBe(count);
      })
    })
  })

})