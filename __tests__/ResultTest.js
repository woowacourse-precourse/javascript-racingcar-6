import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from './module/modules.js';

describe('각 시도별 결과 출력', () => {
  test('예제 입력 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '4'];
    const outputs = [
      'pobi : -',
      'woni : ',
      'pobi : --',
      'woni : -',
      'pobi : ---',
      'woni : --',
      'pobi : ----',
      'woni : ---',
    ];

    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 한명 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '4'];
    const outputs = ['최종 우승자 : pobi'];

    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 여러명 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '4'];
    const outputs = ['최종 우승자 : pobi, woni'];

    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD];

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms, MOVING_FORWARD]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
