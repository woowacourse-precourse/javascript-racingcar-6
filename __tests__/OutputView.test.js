import { MissionUtils } from '@woowacourse/mission-utils';
import { CARS } from '../src/Constants.js';
import OutputView from '../src/view/OutputView';

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

describe('OutputView 클래스의 메소드들의 테스트', () => {
  beforeEach(() => {
    CARS.length = 0;
    jest.resetAllMocks();
  });

  test('printeachRaceGame이 각 자동차들의 전진현황을 올바르게 출력하는가', () => {
    // given
    CARS.push({ carName: 'cars1', forwardNumber: 5 });
    CARS.push({ carName: 'cars2', forwardNumber: 4 });
    CARS.push({ carName: 'cars3', forwardNumber: 3 });
    const outputs = ['cars1 : -----', 'cars2 : ----', 'cars3 : ---'];
    // when
    const logSpy = getLogSpy();
    const outputView = new OutputView();
    outputView.printeachRaceGame();
    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each('printWinner이 우승자를 올바르게 출력하는가', () => {
    // given
    CARS.push({ carName: 'cars1', forwardNumber: 5 });
    CARS.push({ carName: 'cars2', forwardNumber: 4 });
    CARS.push({ carName: 'cars3', forwardNumber: 3 });
    const output = ['최종 우승자 : cars1'];
    // when
    const logSpy = getLogSpy();
    const outputView = new OutputView();
    outputView.printWinner();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test.each('printWinner이 공동 우승자도 올바르게 출력하는가', () => {
    // given
    CARS.push({ carName: 'cars1', forwardNumber: 5 });
    CARS.push({ carName: 'cars2', forwardNumber: 5 });
    CARS.push({ carName: 'cars3', forwardNumber: 3 });
    const output = ['최종 우승자 : cars1, cars2'];
    // when
    const logSpy = getLogSpy();
    const outputView = new OutputView();
    outputView.printWinner();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
