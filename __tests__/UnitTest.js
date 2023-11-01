import {
  getDistanceToMove,
  parseNames,
  parseNumber,
} from '../src/utils/common.js';
import CONSTANTS from '../src/constants/index.js';

describe('사용자 입력 파싱 테스트', () => {
  test('자동차 이름을 입력할 때 문자열이 비어있을 경우', () => {
    expect(() => parseNames('')).toThrow('[ERROR]');
  });

  test('자동차 이름을 입력할 때 입력값으로 컴마만 들어간 경우', () => {
    expect(() => parseNames(',')).toThrow('[ERROR]');
  });

  test('자동차 이름을 입력할 때 입력값으로 컴마만 여러개 들어간 경우', () => {
    expect(() => parseNames(',,,,,,')).toThrow('[ERROR]');
  });

  test('자동차 이름을 입력할 때 컴마 이전에 문자열이 없을 경우', () => {
    expect(() => parseNames(',bobo')).toThrow('[ERROR]');
  });

  test('자동차 이름을 입력할 때 컴마 이후에 문자열이 없을 경우', () => {
    expect(() => parseNames(',bobo')).toThrow('[ERROR]');
  });

  test('자동차 이름을 입력할 때 컴마 사이에 문자열이 없을 경우', () => {
    expect(() => parseNames('bobo,,,,tada')).toThrow('[ERROR]');
  });
});

describe('차수 입력 파싱 테스트', () => {
  test('차수를 입력할 때 정상 입력값이 들어올 경우 1', () => {
    expect(() => parseNumber(1)).not.toThrow('[ERROR]');
  });

  test('차수를 입력할 때 정상 입력값이 들어올 경우 2', () => {
    expect(() => parseNumber('1')).not.toThrow('[ERROR]');
  });

  test('차수를 입력할 때 입력값이 숫자가 아닐 경우', () => {
    expect(() => parseNumber('다')).toThrow('[ERROR]');
  });

  test('차수를 입력할 때 입력값이 숫자가 아닐 경우', () => {
    expect(() => parseNumber('')).toThrow('[ERROR]');
  });
});

describe('이동 결정 함수 테스트', () => {
  test('랜덤값이 3일경우 정지', () => {
    expect(getDistanceToMove(3)).toEqual(CONSTANTS.STOP);
  });

  test('랜덤값이 4일경우 전진', () => {
    expect(getDistanceToMove(4)).toEqual(CONSTANTS.MOVE);
  });
});
