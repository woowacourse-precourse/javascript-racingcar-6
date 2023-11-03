import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from '../src/controllers/Controller.js';

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

describe('controller 전체 테스트', () => {
  test('공동 우승자 테스트', async () => {
    const MOVING = 4;
    const STOP = 3;
    const controller = new Controller();
    const movingNumber = [MOVING, MOVING, STOP, MOVING, MOVING, STOP, MOVING, MOVING, STOP];
    const inputs = ['가나다,마바사,아자차', '3'];
    const output = ['가나다 : ---', '마바사 : ---', '아자차 : ', '최종 우승자 : 가나다, 마바사'];
    mockQuestions(inputs);
    mockRandoms([...movingNumber]);
    const move = jest.spyOn(controller, 'moveCarAndPrint');
    const logSpy = getLogSpy();
    await controller.play();

    output.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(move).nthCalledWith(3);
    expect(controller.winners).toHaveLength(2);
  });
  test('우승자 테스트', async () => {
    const MOVING = 4;
    const STOP = 3;
    const controller = new Controller();
    const movingNumber = [MOVING, STOP, STOP];
    const inputs = ['가나다,마바사,아자차', '1'];
    const output = ['가나다 : -', '마바사 : ', '아자차 : ', '최종 우승자 : 가나다'];
    const move = jest.spyOn(controller, 'moveCarAndPrint');
    mockQuestions(inputs);
    mockRandoms([...movingNumber]);
    const logSpy = getLogSpy();
    await controller.play();
    output.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    expect(move).nthCalledWith(1);
    expect(controller.winners).toHaveLength(1);
  });
});
