import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const Mockfn = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

test('myTest : split 메서드로 입력값이 구분되는지 테스트', async () => {
  const inputs = ['cat,dog'];
  Mockfn(inputs);

  const app = new App();

  await app.play();

  expect(app.game.SET_CARNAME).toEqual(['cat', 'dog']);
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
