import Race from '../RacingCar/Race.js';
import { validateTurnNumber } from '../validations/validateTurnNumber.js';
import { IN_GAME_ERROR } from '../src/constants.js';

describe('Race 객체에 대한 함수, 메서드 및 유효성 검증 테스트', () => {
  test('시도 횟수 입력값에 대한 유효성 검증', () => {
    expect(() => validateTurnNumber('')).toThrow(IN_GAME_ERROR.invalidInputTurnNumber);
    expect(() => validateTurnNumber('0')).toThrow(IN_GAME_ERROR.invalidInputTurnNumber);
    expect(() => validateTurnNumber('10')).toThrow(IN_GAME_ERROR.invalidInputTurnNumber);
    expect(() => validateTurnNumber('a')).toThrow(IN_GAME_ERROR.invalidInputTurnNumber);
    expect(() => validateTurnNumber('2^2')).toThrow(IN_GAME_ERROR.invalidInputTurnNumber);
    expect(() => validateTurnNumber('7')).not.toThrow('[ERROR]');
  });
});
