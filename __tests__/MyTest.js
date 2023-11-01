import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const Mockfn = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

test('myTest : split 메서드로 입력값이 구분되는지 테스트', async () => {
  const inputs = ['cat,dog'];
  Mockfn(inputs);

  const app = new App();

  await app.play();

  expect(app.SET_CARNAME).toEqual(['cat', 'dog']);
});

test('myTest : 값에 따른 자동차 전진 기능 테스트', async () => {
  const input = ['cat,dog', '1'];
  const random = [4, 3];
  const output = ['cat : -', 'dog : '];
  const logSpy = getLogSpy();
  Mockfn(input);
  mockRandoms([...random]);

  const app = new App();
  await app.play();

  output.forEach((element) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(element));
  });
});

test.each([[['cat,catcat']], [['cat,cat']], [['cat,']], [['cat, cat ']]])(
  'myTest : 이름에 대한 예외처리',
  async (inputs) => {
    Mockfn(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  },
);

test.each([[['cat,dog', '0']], [['cat,dog', '']], [['cat,dog', '-1']]])(
  'myTest : 시도 횟수에 대한 예외처리',
  async (inputs) => {
    Mockfn(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  },
);
