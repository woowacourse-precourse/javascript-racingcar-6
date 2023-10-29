import CarGameController from '../src/controller/CarGameController.js';
import OutputView from '../src/view/OutputView.js';

describe('CarGameController', () => {
  let carGameController;

  beforeAll(() => {
    jest.spyOn(OutputView, 'printResultMessage').mockImplementation(() => {});
    jest.spyOn(OutputView, 'printGameProcess').mockImplementation(() => {});
  });

  beforeEach(() => {
    carGameController = new CarGameController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('checkResultStage', () => {
    test('실행 결과 횟수만큼 출력', () => {
      const carPosition = new Map();
      carPosition.set('a', 2);
      carPosition.set('b', 1);
      carPosition.set('c', 2);
      const attempts = 2;

      carGameController.checkResultStage(carPosition, attempts);

      expect(OutputView.printResultMessage).toHaveBeenCalled();
      expect(OutputView.printGameProcess).toHaveBeenCalledTimes(attempts);
    });
  });
});
