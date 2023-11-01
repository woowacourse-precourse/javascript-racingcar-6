import Validator from '../src/Validator';
import { GAME } from '../src/Constant';

describe('자동차 이름에 대한 예외처리', () => {
  test.each([[['pobi', 'javaji']], [['a', '', 'c']], [['', '']]])(
    `자동차 이름은 ${GAME.MIN_CAR_NAME_LENGTH}자 이상 ${GAME.MAX_CAR_NAME_LENGTH}자 이하여야한다. `,
    async (inputs) => {
      expect(() => {
        Validator.validateCarNames(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([[['a', 'a']], [['b', 'a', 'c', 'a']]])(
    '자동차 이름은 중복될 수 없다.',
    async (inputs) => {
      expect(() => {
        Validator.validateCarNames(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([[['a']], [['b']]])(
    '최소 자동차는 두대 이상이어야한다.',
    async (inputs) => {
      expect(() => {
        Validator.validateCarNames(inputs);
      }).toThrow('[ERROR]');
    }
  );
});

describe('시도 횟수에 대한 예외처리', () => {
  test.each([[-1], [0]])('시도 횟수는 양의 정수 여야한다.', async (inputs) => {
    expect(() => {
      Validator.validateTryCount(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([['one'], [['😍']]])(
    '시도 횟수는 숫자여야한다.',
    async (inputs) => {
      expect(() => {
        Validator.validateTryCount(inputs);
      }).toThrow('[ERROR]');
    }
  );
});
