import Validator from '../../src/utils/Validator';
import RACING_GAME from '../../src/constants/racingGame';
import CustomError from '../../src/errors/error';

describe('Validator 테스트', () => {
  describe('is로 시작하는 메서드는 boolean을 반환한다.', () => {
    describe('isEmptyString()', () => {
      // given
      const cases = [
        {
          input: '',
          expected: true,
        },
        {
          input: 'not empty string :)',
          expected: false,
        },
      ];

      cases.forEach(({ input, expected }) => {
        test(`빈 문자열인지 확인한다.`, () => {
          // when
          const result = Validator.isEmptyString(input);

          // then
          expect(result).toBe(expected);
        });
      });
    });

    describe('isValidCarNameLength()', () => {
      // 자동차의 이름은 1자 이상 5자 이하만 가능하다.

      // given
      const cases = [
        {
          input: 'pobi',
          expected: true,
          description: '정상적으로 생성되는 경우',
        },
        {
          input: 'crong',
          expected: true,
          description: '정상적으로 생성되는 경우',
        },
        {
          input: '',
          expected: false,
          description: '길이가 0인 경우',
        },
        {
          input: 'pengoose',
          expected: false,
          description: '길이가 5를 초과하는 경우',
        },
      ];

      const isValidLength = (name) => Validator.isValidCarNameLength(name);

      cases.forEach(({ input, expected, description }) => {
        test(`${description}, ${expected}를 반환한다.`, () => {
          // when
          const result = isValidLength(input);

          // then
          expect(result).toBe(expected);
        });
      });
    });
  });

  describe('validate로 시작하는 메서드는 CustomError를 생성한다.', () => {
    /**
     *
     * @param {() => void} validation 유효성 검증 함수입니다.
     * @param {*} input 검증할 값을 입력합니다.
     * @param {CustomError} error 생성되어야하는 에러입니다.
     */
    const shouldThrowError = (validation, input, error = CustomError) => {
      // when
      const validate = () => validation(input);

      // then
      expect(validate).toThrow(error);
    };

    /**
     *
     * @param {() => void} validation 유효성 검증 함수입니다.
     * @param {*} input 검증할 값을 입력합니다.
     */
    const shouldNotThrowError = (validation, input) => {
      // when
      const validate = () => validation(input);

      // then
      expect(validate).not.toThrow();
    };

    describe('validateDuplicatedCarName()', () => {
      test('중복된 자동차 이름이 있으면 예외를 던져야 한다.', () => {
        // given
        const duplicatedNames = ['car', 'car'];

        shouldThrowError(
          Validator.validateDuplicatedCarName,
          duplicatedNames,
          CustomError,
        );
      });

      test('중복된 자동차 이름이 없으면 예외를 던지지 않아야 한다.', () => {
        // given
        const uniqueNames = ['pobi', 'crong'];

        shouldNotThrowError(Validator.validateDuplicatedCarName, uniqueNames);
      });
    });

    describe('validateRound()', () => {
      test('라운드가 최소값 미만이면 예외를 던져야 한다.', () => {
        // given
        const invalidRound = 0;

        shouldThrowError(
          (input) => Validator.validateRound(input),
          invalidRound,
          CustomError,
        );
      });

      test('라운드가 정수가 아니면 예외를 던져야 한다.', () => {
        // given
        const invalidRound = 'not a number';

        shouldThrowError(
          (input) => Validator.validateRound(input),
          invalidRound,
          CustomError,
        );
      });

      test('라운드가 최소값 이상이면 예외를 던지지 않아야 한다.', () => {
        // given
        const validRound = RACING_GAME.round.min;

        shouldNotThrowError(
          (input) => Validator.validateRound(input),
          validRound,
        );
      });
    });

    describe('validateUserInput()', () => {
      test('사용자 입력이 빈 문자열이면 예외를 던져야 한다.', () => {
        // given
        const emptyString = '';

        shouldThrowError(
          (input) => Validator.validateUserInput(input),
          emptyString,
          CustomError,
        );
      });

      test('사용자 입력이 비어있지 않으면 예외를 던지지 않아야 한다.', () => {
        // given
        const validInput = 'pengoose';

        shouldNotThrowError(
          (input) => Validator.validateUserInput(input),
          validInput,
        );
      });
    });

    describe('validateInteger()', () => {
      test('정수가 아니면 예외를 던져야 한다.', () => {
        // given
        const notInteger = '9.99';

        shouldThrowError(
          (input) => Validator.validateInteger(input),
          notInteger,
          CustomError,
        );
      });

      test('정수면 예외를 던지지 않아야 한다.', () => {
        // given
        const integer = 5;

        shouldNotThrowError(
          (input) => Validator.validateInteger(input),
          integer,
        );
      });
    });

    describe('validateCarName()', () => {
      test('자동차 이름 길이가 유효하지 않으면 예외를 던져야 한다.', () => {
        // given
        const invalidCarName = 'invalid';

        shouldThrowError(
          (input) => Validator.validateCarName(input),
          invalidCarName,
          CustomError,
        );
      });

      test('자동차 이름 길이가 유효하면 예외를 던지지 않아야 한다.', () => {
        // given
        const validCarName = 'valid';

        shouldNotThrowError(
          (input) => Validator.validateCarName(input),
          validCarName,
        );
      });
    });
  });
});
