import RacingGameController from '../../src/controller/RacingGameController';

import InputView from '../../src/view/InputView';
import OutputView from '../../src/view/OutputView';

import { processCarNames } from '../../src/utils/CarNameProcessor';
import InputValidator from '../../src/utils/InputValidator';

import Car from '../../src/model/Car';
import Race from '../../src/model/Race';

jest.mock('../../src/view/InputView');
jest.mock('../../src/view/OutputView');

jest.mock('../../src/utils/InputValidator');
jest.mock('../../src/utils/CarNameProcessor');

jest.mock('../../src/model/Car');
jest.mock('../../src/model/Race');

describe('RacingGameController 클래스', () => {
  let controller;

  beforeEach(() => {
    controller = new RacingGameController();
  });

  describe('start 메서드', () => {
    test('게임이 올바르게 시작되고 종료되어야 한다', async () => {
      InputView.printCarNames.mockResolvedValue('pobi,wono,jun');
      processCarNames.mockReturnValue(['pobi', 'wono', 'jun']);
      InputView.printNumberOfRounds.mockResolvedValue(5);
      const mockRace = {
        playRound: jest.fn(),
        getRoundResults: jest.fn(),
        getWinnersString: jest.fn()
      };
      Race.mockReturnValue(mockRace);

      await controller.start();

      expect(InputView.printCarNames).toHaveBeenCalled();
      expect(InputView.printNumberOfRounds).toHaveBeenCalled();
      expect(InputValidator.validateNumberOfCars).toHaveBeenCalled();
      expect(InputValidator.validateCarName).toHaveBeenCalled();
      expect(Car).toHaveBeenCalledTimes(3);
      expect(Race).toHaveBeenCalledTimes(1);
      expect(mockRace.playRound).toHaveBeenCalledTimes(5);
      expect(OutputView.printRaceHeader).toHaveBeenCalled();
      expect(OutputView.printRoundResult).toHaveBeenCalled();
      expect(OutputView.printWinners).toHaveBeenCalled();
    });
  });
});
