import RacingGameController from '../src/controllers/RacingGameController';
import RacingGame from '../src/models/RacingGame';
import { MissionUtils } from '@woowacourse/mission-utils';
import {
  GAME_MESSAGES,
  GAME_NUMBERS,
  SYMBOLS,
} from '../src/utils/constants.js';
import OutputView from '../src/views/OutputView';
import InputView from '../src/views/InputView';
import InputValidator from '../src/utils/InputValidator';
import RacingCarFactory from '../src/models/RacingCarFactory';
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

describe('RacingGameController 테스트', () => {
  let inputValidator, inputView, outputView, racingGame, factory, controller;

  beforeEach(() => {
    inputValidator = new InputValidator();
    inputView = new InputView(inputValidator);
    outputView = new OutputView();
    racingGame = new RacingGame();
    factory = new RacingCarFactory();
    controller = new RacingGameController(
      inputView,
      outputView,
      racingGame,
      factory
    );
  });

  test('자동차 경주 결과 테스트', async () => {
    const carNames = ['이의현', '곽수수'];
    const roundNumber = 2;
    const inputs = [
      carNames.join(SYMBOLS.carNameSeparator),
      roundNumber.toString(),
    ];
    const randoms = [
      GAME_NUMBERS.movementThreshold,
      GAME_NUMBERS.movementThreshold - 1,
      GAME_NUMBERS.movementThreshold,
      GAME_NUMBERS.movementThreshold - 1,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    await controller.runRacingGame();

    expect(logSpy).toHaveBeenCalledWith(GAME_MESSAGES.resultHeader);
    expect(logSpy).toHaveBeenCalledWith('이의현 : -\n곽수수 : \n');
    expect(logSpy).toHaveBeenCalledWith('이의현 : --\n곽수수 : \n');
    expect(logSpy).toHaveBeenCalledWith(GAME_MESSAGES.winnerPrefix + '이의현');
  });
});
