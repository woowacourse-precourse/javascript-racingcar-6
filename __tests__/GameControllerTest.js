import { Console } from '@woowacourse/mission-utils';
import GameController from '../src/controller/gameController';
import Car from '../src/utils/car';
import Race from '../src/utils/race';

describe('GameController Class Test', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  test('startGame 메서드가 호출되면 inputCarName, inputNumber, startRace 메서드가 순서대로 호출된다.', async () => {
    jest.spyOn(gameController, 'inputCarName').mockResolvedValue();
    jest.spyOn(gameController, 'inputNumber').mockResolvedValue();
    jest.spyOn(gameController, 'startRace');

    await gameController.startGame();

    expect(gameController.inputCarName).toHaveBeenCalled();
    expect(gameController.inputNumber).toHaveBeenCalled();
    expect(gameController.startRace).toHaveBeenCalled();
  });

  test('inputCarName 메서드가 호출되면 자동차 이름을 입력받는다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('car1,car2,car3');

    await gameController.inputCarName();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  });

  test('inputNumber 메서드가 호출되면 횟수를 입력받는다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('5');

    await gameController.inputNumber();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '시도할 횟수는 몇 회인가요?\n',
    );
  });

  test('startRace 메서드가 호출되면 Race 객체가 생성되고 advance와 printRaceResult가 적절한 횟수만큼 호출된다.', () => {
    gameController.cars = [new Car('car1'), new Car('car2'), new Car('car3')];
    gameController.chance = 3;

    const raceAdvanceSpy = jest.spyOn(Race.prototype, 'advance');
    const racePrintRaceResultSpy = jest.spyOn(
      Race.prototype,
      'printRaceResult',
    );

    gameController.startRace();

    expect(raceAdvanceSpy).toHaveBeenCalledTimes(gameController.cars.length);
    expect(racePrintRaceResultSpy).toHaveBeenCalledTimes(
      gameController.cars.length,
    );
  });

  test('printResult 메서드가 호출되면 race.printWinner 가 호출된다.', () => {
    gameController.race = new Race([
      new Car('car1'),
      new Car('car2'),
      new Car('car3'),
    ]);

    const racePirntWinnerSpy = jest.spyOn(gameController.race, 'printWinner');

    gameController.printResult();

    expect(racePirntWinnerSpy).toHaveBeenCalled();
  });
});
