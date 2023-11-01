import App from '../src/App.js';
import Car from '../src/Car.js';
import { ERRORS } from '../src/constants/Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력 유효성 테스트', () => {
  test('자동차 이름이 정상적으로 입력된 경우 Car 객체 배열 반환', async () => {
    const input = ['aria,evan'];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingCarNames();

    expect(JSON.stringify(result)).toEqual(
      JSON.stringify([new Car('aria'), new Car('evan')])
    );
  });

  test('자동차 이름이 하나만 입력된 경우 Car 객체 배열 반환', async () => {
    const input = ['aria'];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingCarNames();

    expect(JSON.stringify(result)).toEqual(JSON.stringify([new Car('aria')]));
  });

  test('자동차 이름이 입력되지 않은 경우 오류 발생', async () => {
    const input = [];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarNames()).rejects.toThrow(
      ERRORS.null
    );
  });

  test('자동차 이름이 중복되는 경우 오류 발생', async () => {
    const input = ['aria,aria'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarNames()).rejects.toThrow(
      ERRORS.carName.duplicate
    );
  });

  test('자동차 이름이 다섯 글자보다 긴 경우 오류 발생', async () => {
    const input = ['ariana,evan'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarNames()).rejects.toThrow(
      ERRORS.carName.length
    );
  });
});

describe('자동차 경주 횟수 입력 유효성 테스트', () => {
  test('자동차 경주 횟수가 정상적으로 입력된 경우 입력된 값 반환', async () => {
    const input = ['3'];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingGameCount();

    expect(result).toEqual('3');
  });

  test('자동차 경주 횟수가 입력되지 않은 경우 오류 발생', async () => {
    const input = [''];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingGameCount()).rejects.toThrow(
      ERRORS.null
    );
  });

  test('자동차 경주 횟수가 숫자가 아닌 경우 오류 발생', async () => {
    const input = ['str'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingGameCount()).rejects.toThrow(
      ERRORS.gameCount.type
    );
  });

  test('자동차 경주 횟수가 소수인 경우 오류 발생', async () => {
    const input = ['1.8'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingGameCount()).rejects.toThrow(
      ERRORS.gameCount.range
    );
  });

  test('자동차 경주 횟수가 0인 경우 오류 발생', async () => {
    const input = ['0'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingGameCount()).rejects.toThrow(
      ERRORS.gameCount.range
    );
  });

  test('자동차 경주 횟수가 음수인 경우 오류 발생', async () => {
    const input = ['-1'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingGameCount()).rejects.toThrow(
      ERRORS.gameCount.range
    );
  });
});
