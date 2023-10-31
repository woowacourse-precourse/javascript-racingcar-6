import CarRaceController from '../src/controller/CarRaceController.js';
import OutputView from '../src/views/OutputView.js';

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
      const carPosition = new Map();
      carPosition.set('a', 2);
      carPosition.set('b', 1);
      carPosition.set('c', 2);
      const attempts = 2;

      carGameController.checkProcessStage(carPosition, attempts);

      expect(OutputView.printResultMessage).toHaveBeenCalled();
      expect(OutputView.printRaceProcess).toHaveBeenCalledTimes(attempts);
    });
  });
});
