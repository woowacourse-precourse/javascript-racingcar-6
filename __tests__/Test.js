/* eslint-disable */
import readline from 'readline';
import Validate from '../../javascript-racingcar-6/src/validation';
import App from '../../javascript-racingcar-6/src/App';
import { Random, Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('비정상 값 입력', () => {
  test('자동차 이름 양식 빈 칸 오류', () => {
    expect(() => Validate.carsValidate()).toThrow('[ERROR] 자동차 이름을 입력해주세요');
  });

  test('자동차 이름 양식 길이 초과', () => {
    expect(() => Validate.carsValidate('111111,1,1')).toThrow(
      '[ERROR] 자동차 이름의 길이가 5 초과 입니다.'
    );
    expect(() => Validate.carsValidate('1,1111111,1')).toThrow(
      '[ERROR] 자동차 이름의 길이가 5 초과 입니다.'
    );
    expect(() => Validate.carsValidate('1,1,1111111')).toThrow(
      '[ERROR] 자동차 이름의 길이가 5 초과 입니다.'
    );
  });
  test('시도 횟수 입력 검증', () => {
    expect(() =>
      Validate.tryNumberValidate('1a').toThrow('[ERROR] 정수로 된 숫자를 입력해주세요.')
    );
    expect(() =>
      Validate.tryNumberValidate('1.1').toThrow('[ERROR] 정수로 된 숫자를 입력해주세요.')
    );
    expect(() =>
      Validate.tryNumberValidate('1a1').toThrow('[ERROR] 정수로 된 숫자를 입력해주세요.')
    );
    expect(() => Validate.tryNumberValidate('0').toThrow('[ERROR] 양수를 입력해주세요.'));
    expect(() => Validate.tryNumberValidate('-1').toThrow('[ERROR] 양수를 입력해주세요.'));
  });
});

describe('정상 값 입력', () => {
  test('첫 자동차만 전진하고 나머지는 전진 0회인 경우', async () => {
    // given
    const inputs = ['a, b, c, d', '2'];
    const outputs = ['\n실행 결과', 'a : --', 'b :', 'c :', 'd :', '최종 우승자 : a'];
    const randoms = [4, 0, 0, 0, 4, 0, 0, 0];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);
    // when
    const app = new App();
    await app.play();
    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('모든 자동차가 우승한 경우', async () => {
    // given
    const inputs = ['a, b, c, d', '2'];
    const outputs = ['a : --', 'b : --', 'c : --', 'd : --', '최종 우승자 : a, b, c, d'];
    const randoms = [4, 4, 4, 4, 4, 4, 4, 4];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);
    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('모든 자동차가 전진을 한 번도 못한 경우', async () => {
    // given
    const inputs = ['a, b, c, d', '2'];
    const outputs = ['a :', 'b :', 'c :', 'd :', '최종 우승자 : a, b, c, d'];
    const randoms = [0, 0, 0, 0, 0, 0, 0, 0];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);
    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
