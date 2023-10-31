import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('유저 입력', () => {
  test('carInput', async () => {
    // given
    const input = 'july,james,frank';
    mockQuestion(input);
    // when
    const app = new App();
    const result = await app.carInput();
    // then
    expect(input).toEqual(result);
  });

  test('numInput', async () => {
    // given
    const input = 5;
    mockQuestion(input);
    // when
    const app = new App();
    const result = await app.numInput();
    // then
    expect(input).toEqual(result);
  });
});