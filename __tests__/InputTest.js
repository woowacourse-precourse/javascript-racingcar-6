import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/Constants.js';
import GameUi from '../src/view/GameUi.js';
import App from '../src/App.js';
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('차이름 입력 테스트', () => {
  test('아무것도 입력하지 않았을 때', async () => {
    // given
    mockQuestions(['']);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NO_INPUT);
  });

  test.each([[['jy,']], [['abcd,']]])(
    '쉼표 뒤에 아무것도 입력하지 않았을 때 에러 발생',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        ERROR_MESSAGE.NO_INPUT_AFTER_COMMA
      );
    }
  );

  test.each([[['abcd qqqq aaaa']], [['adea/weww/wwwa']]])(
    '쉼표 자체가 없을 때 에러 발생',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NO_COMMA);
    }
  );

  test.each([
    [['adqweqw,qeqwwewe,wwqqwe']],
    [['김우빈의자동차,이주영의자동차']],
  ])('차 이름이 5자를 초과했을 때 에러 발생', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      ERROR_MESSAGE.EXCEED_FIVE_CHARACTORS
    );
  });

  test.each([[['fffff,qwee,fffff']], [['defef,aaaa,bdce,aaaa']]])(
    '차들중 중복된 차이름이 있다면 에러 발생',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        ERROR_MESSAGE.DUPLICATE_CAR_NAME
      );
    }
  );
});

describe('시도할 횟수 입력값 테스트', () => {
  let gameManager;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test.each([[['four times']], [['five']]])(
    '시도할 횟수를 입력했을 때 숫자가 아닌경우',
    async (inputs) => {
      mockQuestions([inputs]);

      // when
      const gameUi = new GameUi();

      // then
      await expect(gameUi.askAttemptCount()).rejects.toThrow(
        ERROR_MESSAGE.NO_NUMBER
      );
    }
  );

  test.each([[['-3']], [['0']]])(
    '시도할 횟수를 입력했을 때 양의 정수가 아닌경우',
    async (inputs) => {
      mockQuestions([inputs]);

      // when
      const gameUi = new GameUi();

      // then
      await expect(gameUi.askAttemptCount()).rejects.toThrow(
        ERROR_MESSAGE.NOT_POSITIVE_INTEGER
      );
    }
  );
});
