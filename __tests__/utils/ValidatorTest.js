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

  describe('validate로 시작하는 메서드는 CustomError를 던진다.', () => {
    describe('validateDuplicatedCarName()', () => {
      test('중복된 자동차 이름이 있으면 예외를 던져야 한다.', () => {
        // given
        const duplicatedNames = ['car', 'car'];

        // when
        const validateDuplicatedCarName = () => {
          Validator.validateDuplicatedCarName(duplicatedNames);
        };

        // then
        expect(validateDuplicatedCarName).toThrow(CustomError);
      });

      test('중복된 자동차 이름이 없으면 예외를 던지지 않아야 한다.', () => {
        // given
        const uniqueNames = ['pobi', 'crong'];

        // when
        const validateDuplicatedCarName = () => {
          Validator.validateDuplicatedCarName(uniqueNames);
        };

        // then
        expect(validateDuplicatedCarName).not.toThrow();
      });
    });

    describe('validateRound()', () => {
      test('라운드가 최소값 미만이면 예외를 던져야 한다.', () => {
        // given
        const invalidRound = 0;

        // when
        const validateRound = () => Validator.validateRound(invalidRound);

        // then
        expect(validateRound).toThrow(CustomError);
      });

      test('라운드가 정수가 아니면 예외를 던져야 한다.', () => {
        // given
        const invalidRound = 'not a number';

        // when
        const validateRound = () => Validator.validateRound(invalidRound);

        // then
        expect(validateRound).toThrow(CustomError);
      });

      test('라운드가 최소값 이상이면 예외를 던지지 않아야 한다.', () => {
        // given
        const validRound = RACING_GAME.round.min;

        // when
        const validateRound = () => Validator.validateRound(validRound);

        // then
        expect(validateRound).not.toThrow();
      });
    });

    describe('validateUserInput()', () => {
      test('사용자 입력이 빈 문자열이면 예외를 던져야 한다.', () => {
        // given
        const emptyString = '';

        // when
        const validateUserInput = () =>
          Validator.validateUserInput(emptyString);

        // then
        expect(validateUserInput).toThrow(CustomError);
      });

      test('사용자 입력이 비어있지 않으면 예외를 던지지 않아야 한다.', () => {
        // given
        const validInput = 'pengoose';

        // when
        const validateUserInput = () => Validator.validateUserInput(validInput);

        // then
        expect(validateUserInput).not.toThrow();
      });
    });

    describe('validateInteger()', () => {
      test('정수가 아니면 예외를 던져야 한다.', () => {
        // given
        const notInteger = '9.99';

        // when
        const validateInteger = () => Validator.validateInteger(notInteger);

        // then
        expect(validateInteger).toThrow(CustomError);
      });

      test('정수면 예외를 던지지 않아야 한다.', () => {
        // given
        const integer = 5;

        // when
        const validateInteger = () => Validator.validateInteger(integer);

        // then
        expect(validateInteger).not.toThrow();
      });
    });

    describe('validateCarName()', () => {
      test('자동차 이름 길이가 유효하지 않으면 예외를 던져야 한다.', () => {
        // given
        const invalidCarName = 'invalid';

        // when
        const validateCarName = () => Validator.validateCarName(invalidCarName);

        // then
        expect(validateCarName).toThrow(CustomError);
      });

      test('자동차 이름 길이가 유효하면 예외를 던지지 않아야 한다.', () => {
        // given
        const validCarName = 'valid';

        // when
        const validateCarName = () => Validator.validateCarName(validCarName);

        // then
        expect(validateCarName).not.toThrow();
      });
    });
  });
});
