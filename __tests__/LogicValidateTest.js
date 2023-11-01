import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('자동차 경주 게임 로직 유효성 검사', () => {
  test('전진 테스트', async () => {
    // given
    const inputs = ['pobi,woni', '2'];
    const randoms = [4, 0, 7, 0];
    const outputs = ['woni : ', 'pobi : -', 'pobi : --'];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 테스트1', async () => {
    // given
    const inputs = ['pobi, woni, jin', '4'];
    const randoms = [4, 0, 7, 0, 4, 0, 7, 0, 4, 0, 0, 0];
    const outputs = ['최종 우승자: pobi, jin'];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 테스트2', async () => {
    // given
    const inputs = ['pobi, woni, jin', '4'];
    const randoms = [4, 0, 7, 0, 4, 0, 7, 0, 4, 0, 7, 0];
    const outputs = ['최종 우승자: pobi, woni, jin'];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 테스트3', async () => {
    // given
    const inputs = ['pobi, woni, jin', '4'];
    const randoms = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const outputs = ['최종 우승자: pobi'];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('통합 테스트1', async () => {
    // given
    const inputCars = ['car1, car2, car3'];
    const inputCount = '3';
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [
      '실행 결과',
      'car1 : ',
      'car2 : ',
      'car3 : ',
      'car1 : -',
      'car2 : -',
      'car3 : -',
      'car1 : --',
      'car2 : --',
      'car3 : --',
      '최종 우승자: car1, car2, car3',
    ];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions([...inputCars, inputCount]);

    // when
    const app = new App();
    await app.play();

    // then
    result.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('통합 테스트2', async () => {
    // given
    const inputCars = ['car1, car2'];
    const inputCount = '1';
    const randoms = [5, 3];
    const result = ['실행 결과', 'car1 : -', 'car2 : ', '최종 우승자: car1'];
    const logSpy = getLogSpy();
    mockRandoms([...randoms]);
    mockQuestions([...inputCars, inputCount]);

    // when
    const app = new App();
    await app.play();

    // then
    result.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
