import App from '../src/App.js';

import { mockQuestions, mockRandoms, getLogSpy } from '../testUtils';

import { MESSAGE } from '../src/constant/';

describe('자동차 경주 게임: 출력 메세지 테스트', () => {
  test('입력에 대한 메세지 출력 및 유효한 입력값 출력', async () => {
    const inputs = ['pobi,woni', '0'];
    const outputs = [
      MESSAGE.inputName,
      inputs[0],
      MESSAGE.inputRound,
      inputs[1],
      MESSAGE.gameResult,
    ];
    const randoms = [1, 1];
    const logSpy = getLogSpy(jest);

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 실행 결과 출력', async () => {
    const inputs = ['pobi,woni', '0'];
    const outputs = ['pobi : ', 'woni : ', '최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy(jest);

    mockQuestions(inputs);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
