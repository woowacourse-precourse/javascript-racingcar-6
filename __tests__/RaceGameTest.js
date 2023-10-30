import { Random, Console } from '@woowacourse/mission-utils';
import Car from '../src/domain/Car';
import RaceGame from '../src/domain/RaceGame.js';
import { GAME_RULE_NUMBER, ERROR_MESSAGES } from '../src/constant/Constants.js';
import {
  printProgressProcess,
  printWinnerList,
  printProgressResult,
  printEmptyLine,
  getCarNameList,
  getTryNum,
} from '../src/util/Utils.js';
import App from '../src/App.js';
import {
  checkCarNameEmpty,
  checkCarNameLen,
  checkCarNameSpace,
  checkCarNameType,
  checkTryNumType,
  checkTryNumZero,
} from '../src/util/Validation';

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
      const expectedTryNum = '15';
      Console.readLineAsync.mockResolvedValue(expectedTryNum);
      const result = await getTryNum();
      expect(result).toBe(expectedTryNum);
    });
  });
});

describe('입력 값 검증 테스트', () => {
  describe('이름 입력 값 테스트', () => {
    describe('checkCarNameEmpty 테스트', () => {
      test('빈 문자열인 경우 에러 발생', () => {
        const carName = '';
        expect(() => checkCarNameEmpty(carName)).toThrowError(
          ERROR_MESSAGES.errorNameEmpty,
        );
      });
      test('빈 문자열이 아니면 에러 발생하지 않음', () => {
        const carName = 'chan';
        expect(() => checkCarNameEmpty(carName)).not.toThrow();
      });
    });

    describe('checkCarNameSpace 테스트', () => {
      test('공백이 있으면 에러 반환', () => {
        const carName = 'chan, bo';
        expect(() => checkCarNameSpace(carName)).toThrowError(
          ERROR_MESSAGES.errorNameSpace,
        );
      });
      test('공백이 없으면 에러 발생하지 않음', () => {
        const carName = 'chan,bo';
        expect(() => checkCarNameSpace(carName)).not.toThrow();
      });
    });
    describe('checkCarNameLen 테스트', () => {
      test('길이가 5보다 길면 에러 발생', () => {
        const carName = 'LeeChan';
        expect(() => checkCarNameLen(carName)).toThrowError(
          ERROR_MESSAGES.errorNameLen,
        );
      });
      test('길이가 5이하면 에러 발생하지 않음 ', () => {
        const carName = 'chan';
        expect(() => checkCarNameLen(carName)).not.toThrow();
      });
    });
    describe('checkCarNameType 테스트', () => {
      test('한글, 영어가 아니면 에러 발생', () => {
        const carName = '123a,bo22';
        expect(() => checkCarNameType(carName)).toThrowError(
          ERROR_MESSAGES.errorNameType,
        );
      });
      test('한글, 영어면 에러 발생하지 않음', () => {
        const carName = '이찬,Chan';
        expect(() => checkCarNameType(carName)).not.toThrow();
      });
    });
  });
});
describe('시도 횟수 입력 값 테스트', () => {
  describe('checkTryNumType 테스트', () => {
    test('숫자가 아니면 에러 발생', () => {
      const tryNum = 'a';
      expect(() => checkTryNumType(tryNum)).toThrowError(
        ERROR_MESSAGES.errorTryNumType,
      );
    });
    test('숫자면 에러 발생하지 않음', () => {
      const tryNum = '1';
      expect(() => checkTryNumType(tryNum)).not.toThrow();
    });
  });
  describe('checkTryNumZero 테스트', () => {
    test('숫자가 0이면 에러 발생', () => {
      const tryNum = '0';
      expect(() => checkTryNumZero(tryNum)).toThrowError(
        ERROR_MESSAGES.errorTryNumZero,
      );
    });
    test('숫자가 0이 아니면 에러 발생 하지 않음', () => {
      const tryNum = '123';
      expect(() => checkTryNumZero(tryNum)).not.toThrow();
    });
  });
});

/* test('', () => {
    const carName = '';
    expect(() => checkCarNameEmpty(carName)).toThrowError(
      ERROR_MESSAGES.errorNameEmpty,
    );
  });
  test('', () => {
    const carName = '';
    expect(() => checkCarNameEmpty(carName)).not.toThrow();
  }); */
