import { Console } from '@woowacourse/mission-utils';
import CreateCarName from '../src/CreateCarName.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('CreateCarName 클래스 테스트', () => {
  let namingCar;

  beforeEach(() => {
    namingCar = new CreateCarName();
  });

  describe('이름 입력 테스트', () => {
    test('인자로 넣은 입력 값 출력 테스트', () => {
      const input = 'kim,lee,park';
      const output = 'kim,lee,park';
      const logSpy = getLogSpy();

      namingCar.carName(input);

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  describe('이름 입력 예외 처리 테스트', () => {
    test('빈 값, 5자 이상, 숫자, 특수문자, 공백을 입력했을 때', () => {
      const inputs = [
        '',
        'redcar,blue',
        1,
        'red-car',
        'red, blue',
        '$$',
        'red car',
      ];
      const input = inputs[Math.floor(Math.random() * inputs.length)];

      expect(() => {
        namingCar.wrongName(input);
      }).toThrow('[ERROR]');
    });
  });
});
