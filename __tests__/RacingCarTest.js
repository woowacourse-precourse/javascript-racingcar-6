import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import RacingCar from '../src/RacingCar.js';
import RacingGame from '../src/RacingGame.js';
import OutputView from '../src/OutputView.js';

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

describe('RacingGame', () => {
  let app;

  beforeEach(async () => {
    app = new App();
  });

  test('car2가 우승하는 경우', async () => {
    const inputs = ['car1, car2, car3', '1'];
    const randomNumbers = [2, 4, 1];
    const outputs = ['최종 우승자: car2'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    mockRandoms(randomNumbers);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자가 2명 이상인 경우', async () => {
    const inputs = ['car1, car2, car3', '2'];
    const randomNumbers = [6, 4, 1, 4, 5, 1];
    const outputs = ['최종 우승자: car1, car2'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    mockRandoms(randomNumbers);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('OutputView 테스트', () => {
  test('OutputView가 차량 위치를 올바르게 포맷하는지 확인', () => {
    // given
    const outputs = ['car1 : \n', 'car2 : -\n', 'car3 : -'];
    const logSpy = getLogSpy();
    const car1 = new RacingCar('car1');
    const car2 = new RacingCar('car2');
    const car3 = new RacingCar('car3');
    car1.move(1);
    car2.move(4);
    car3.move(8);

    // when
    OutputView.printRoundResults([car1, car2, car3]);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('1명의 우승자가 올바르게 출력되는지 확인', () => {
    const winners = ['car1'];
    const outputs = ['최종 우승자: car1'];
    const logSpy = getLogSpy();

    OutputView.printFinalResult(winners);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('다수 우승자가 올바르게 출력되는지 확인', () => {
    const winners = ['car1', 'car2', 'car3'];
    const outputs = ['최종 우승자: car1, car2, car3'];
    const logSpy = getLogSpy();

    OutputView.printFinalResult(winners);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
