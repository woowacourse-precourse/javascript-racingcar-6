import App from '../src/App.js';
import Car from '../src/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  inputs.forEach((input) =>
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input)
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) =>
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number)
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe('setupGame', () => {
    test('유효한 names와 trialNumber로 게임 설정 (setupGame) 테스트', async () => {
      // given
      const inputs = ['car1,car2,car3', '5'];
      mockQuestions(inputs);

      // when
      await app.setupGame();

      // then
      expect(app.cars.length).toEqual(3);
      expect(app.trial).toEqual(5);
    });
  });

  describe('printGameStartMessage', () => {
    test('실행 결과 메세지 출력', () => {
      // given
      const logSpy = getLogSpy();

      // when
      app.printGameStartMessage();

      // then
      expect(logSpy).toHaveBeenCalledWith('\n실행 결과');
    });
  });

  describe('runCarRaceGame', () => {
    test('각 라운드마다 자동차의 상태 출력 테스트', () => {
      // given
      app.cars = [new Car('car1'), new Car('car2'), new Car('car3')];
      app.trial = 5;
      const randoms = Array(app.trial * app.cars.length).fill(4);
      mockRandoms(randoms);
      const logSpy = getLogSpy();

      // when
      app.runCarRaceGame();

      // then
      expect(logSpy).toHaveBeenCalledTimes(app.trial * (app.cars.length + 1));
    });
  });

  describe('selectWinner', () => {
    test('우승자 선정 및 결과 출력 테스트', () => {
      // given
      app.cars = [new Car('car1'), new Car('car2'), new Car('car3')];
      app.cars[0].racing = '---';
      app.cars[1].racing = '----';
      app.cars[2].racing = '--';
      const logSpy = getLogSpy();

      // when
      app.selectWinner();

      // then
      expect(logSpy).toHaveBeenCalledWith('최종 우승자 : car2');
    });
  });
});
