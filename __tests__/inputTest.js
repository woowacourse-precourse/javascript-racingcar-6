import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('getAndValidatePlayerName', () => {
  test('사용자 이름 입력 및 유효성 검사', async () => {
    const inputs = ['john', 'manu,max', 'jeong'];
    mockQuestions([inputs]);

    const app = new App();
    await app.getAndValidatePlayerName();

    expect(app.players).toEqual([
      { name: 'john', moveAttempts: 0 },
      { name: 'manu', moveAttempts: 0 },
      { name: 'max', moveAttempts: 0 },
      { name: 'jeong', moveAttempts: 0 },
    ]);
  });
});

describe('getPlayerInput', () => {
  test('사용자 이름 입력', async () => {
    // given
    const inputs = ['pobi', 'manu,max', 'jeong'];
    mockQuestions([inputs]);

    // when
    const app = new App();

    // then
    const PLAYER_NAME = await app.getPlayerName();
    expect(PLAYER_NAME).toBe(inputs);
  });
});

describe('getAndValidateRacingRounds', () => {
  test('사용자 입력 레이싱 라운드 숫자 및 유효성 검사', async () => {
    // given
    const inputs = ['7'];
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.getAndValidateRacingRounds();

    // then
    expect(app.ROUNDS).toBe(7);
  });
});
