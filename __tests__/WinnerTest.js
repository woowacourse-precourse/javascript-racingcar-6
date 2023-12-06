import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from '../testUtils/index.js';

describe('경기 진행 후 우승자 출력', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('단일 우승자인 경우 ', async () => {
    const ROUND = 2;
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const INPUTS = ['pobi,woni,apple', ROUND];
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

    mockQuestions(INPUTS);
    mockRandoms([...randoms]);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('복수 우승자인 경우, 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분하며 출력되는 우승자이름은 입력되는 순서에 따른다.', async () => {
    const round = 3;
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const INPUTS = ['poBi,woni,Apple', round];
    const RANDOMS = [
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
    const OUTPUTS = [
      'poBi : --',
      'woni : ',
      'Apple : --',
      '최종 우승자 : poBi, Apple',
    ];
    const logSpy = getLogSpy(jest);

    mockQuestions(INPUTS);
    mockRandoms([...RANDOMS]);

    await app.play();

    OUTPUTS.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
