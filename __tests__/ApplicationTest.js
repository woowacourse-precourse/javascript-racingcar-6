import App from '../src/App.js';
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

describe('자동차 경주 게임', () => {
  test('게임 전체 실행', async () => {
    // given
    const GO = 4;
    const STOP = 3;
    const inputs = ['hoj77,ghwnd,KHJ', '4'];
    const outputs = [
      'hoj77 : -',
      'ghwnd :',
      'KHJ : -',
      'hoj77 : --',
      'ghwnd : -',
      'KHJ : -',
      'hoj77 : --',
      'ghwnd : --',
      'KHJ : --',
      'hoj77 : ---',
      'ghwnd : --',
      'KHJ : ---',
      '최종 우승자 : hoj77, KHJ',
    ];
    const randoms = [GO, STOP, GO, GO, GO, STOP, STOP, GO, GO, GO, STOP, GO];
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
