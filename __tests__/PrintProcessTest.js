import CarRaceController from '../src/controller/CarRaceController.js';
import RaceProcess from '../src/models/RaceProcess.js';
import OutputView from '../src/views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

describe('CarRaceController', () => {
  let carGameController;

  beforeAll(() => {
    jest.spyOn(OutputView, 'printResultMessage').mockImplementation(() => {});
    jest.spyOn(OutputView, 'printRaceProcess').mockImplementation(() => {});
  });

  beforeEach(() => {
    carGameController = new CarRaceController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('checkProcessStage', () => {
    test('시도 횟수만큼 출력', () => {
      const process = new RaceProcess();
      const forwards = new Map();
      forwards.set('a', 2);
      forwards.set('b', 1);
      forwards.set('c', 2);
      const attempts = 2;

      for (let i = 0; i < attempts; i += 1) {
        const records = process.getForwardProcess(forwards);
        OutputView.printRaceProcess(records);
        Console.print('\n');
      }

      expect(OutputView.printRaceProcess).toHaveBeenCalledTimes(attempts);
    });
  });
});
