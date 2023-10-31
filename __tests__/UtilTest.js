import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constant/Constants.js';
import { getCarNameList, getTryNum } from '../src/util/Utils.js';
import {
  checkCarNameEmpty,
  checkCarNameLen,
  checkCarNameSpace,
  checkCarNameType,
  checkTryNumType,
  checkTryNumZero,
} from '../src/util/Validation';

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
      expect(result).toBe(Number(expectedTryNum));
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
