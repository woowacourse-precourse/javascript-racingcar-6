import Validator from '../src/models/Validator.js';

describe('유저가 입력한 경주할 자동차 이름', () => {
  test('입력값이 없는 경우', () => {
    expect(() => {
      Validator.carNames('').rejects.toThrow('[ERROR]');
    });
  });
  test('하나의 자동차를 입력, 자동차 이름이 5자 이하인 경우', () => {
    expect(() => {
      Validator.carNames('abcde').rejects.toThrow('[ERROR]');
    });
  });
  test('여러개의 자동차를 입력, 중복된 이름이 있는 경우', () => {
    expect(() => {
      Validator.carNames('a,b,a').rejects.toThrow('[ERROR]');
    });
  });
  test('여러개의 자동차를 입력, 모든 이름 중 하나라도 길이가 5 초과한 경우', () => {
    expect(() => {
      Validator.carNames('a,b,cccccc').rejects.toThrow('[ERROR]');
    });
  });
  test('여러개의 자동차를 입력, 모든 이름 중 하나라도 길이가 1 미만인 경우', () => {
    expect(() => {
      Validator.carNames(',a,b').rejects.toThrow('[ERROR]');
    });
  });
});

describe('유저가 입력한 시도 횟수', () => {
  test('입력값이 없는 경우', () => {
    expect(() => {
      Validator.roundNumber('').rejects.toThrow('[ERROR]');
    });
  });
  test('숫자를 입력하지 않은 경우', () => {
    expect(() => {
      Validator.roundNumber('r').rejects.toThrow('[ERROR]');
    });
  });
  test('1보다 작은 숫자가 들어오는 경우', () => {
    expect(() => {
      Validator.roundNumber('0').rejects.toThrow('[ERROR]');
    });
  });
});
