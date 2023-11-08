import App from '../src/App.js';

import { mockQuestions, mockRandoms, getLogSpy } from '../testUtils/index.js';

describe('자동차 경주 게임:우승자 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('단일 우승자', async () => {
    const round = 2;
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,apple', round];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      STOP,
    ];
    const outputs = ['pobi : --', 'woni : ', 'apple : -', '최종 우승자 : pobi'];
    const logSpy = getLogSpy(jest);

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('복수 우승자', async () => {
    const round = 3;
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['poBi,woni,Apple', round];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
    ];
    const outputs = [
      'poBi : --',
      'woni : ',
      'Apple : --',
      '최종 우승자 : poBi, Apple',
    ];
    const logSpy = getLogSpy(jest);

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
