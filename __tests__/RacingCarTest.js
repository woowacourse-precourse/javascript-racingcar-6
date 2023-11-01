import { Console } from '@woowacourse/mission-utils';
import RacingCar from '../src/RacingCar';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingCar 클래스 테스트', () => {
  describe('횟수 입력 테스트', () => {
    test('입력한 횟수 값 출력 테스트', () => {
      const input = '2';
      const output = '2';
      const logSpy = getLogSpy();

      RacingCar.wrongNumber(input);

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  describe('시도 횟수 입력 예외 처리 테스트', () => {
    test('빈 값, 0이하, 문자, 특수문자, 공백이 포함된 값 입력했을 때', () => {
      const inputs = [
        '',
        '일',
        -1,
        'O', // 알파벳 O
        '$$',
        'one',
        '1 2',
        '1+2',
      ];
      const input = inputs[Math.floor(Math.random() * inputs.length)];

      expect(() => {
        RacingCar.wrongNumber(input);
      }).toThrow('[ERROR]');
    });
  });
});
