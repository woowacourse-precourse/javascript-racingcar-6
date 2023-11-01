import { Console } from '@woowacourse/mission-utils';
import CarRaceController from '../src/controllers/CarRaceController';
import InputView from '../src/views/InputView';
import OutputView from '../src/views/OutputView';
import CarRace from '../src/models/CarRace';
import ERROR_MESSAGES from '../src/constants/ErrorMessages';
import Car from '../src/models/Car';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getSpy = (object, target) => {
  const spy = jest.spyOn(object, target);
  spy.mockClear();
  return spy;
};

describe('유효한 입력을 했을 경우, CarRaceController 클래스 기능 테스트', () => {
  // given
  const TEST_CARS = 'woong,gang,coco';
  const TEST_TRY_COUNT = '3';

  let carRaceController;
  let inputView;
  let outputView;

  beforeEach(async () => {
    // given
    const inputs = [TEST_CARS, TEST_TRY_COUNT];

    mockQuestions(inputs);

    inputView = new InputView();
    outputView = new OutputView();
    carRaceController = new CarRaceController(inputView, outputView);

    // when
    await carRaceController.setupRaceEnvironment();
  });

  test('setupRaceEnvironment 메서드는 carRace, racetryCount 멤버변수를 초기화', async () => {
    // given
    const carRace = carRaceController.getCarRace();
    const raceTryCount = carRaceController.getRaceTryCount();
    const raceCars = carRace.getRaceCars();

    // then
    expect(carRace).toBeInstanceOf(CarRace);
    raceCars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
    expect(raceTryCount).toBe(Number(TEST_TRY_COUNT));
  });

  test('processRace 메서드는 racetryCount 만큼만 경주를 진행', async () => {
    // given
    const carRace = carRaceController.getCarRace();
    const runQuarterSpy = getSpy(carRace, 'runQuarter');

    // when
    carRaceController.processRace();

    // then
    expect(runQuarterSpy).toBeCalledTimes(Number(TEST_TRY_COUNT));
  });

  test('printRaceResult 메서드는 경주 우승자를 출력', async () => {
    // given
    const TEST_WINNERS = 'woong, gang';
    const carRace = carRaceController.getCarRace();

    const logSpy = getSpy(outputView, 'printRaceWinners');
    const getWinnersSpy = getSpy(carRace, 'findRaceWinners');
    getWinnersSpy.mockImplementation(() => TEST_WINNERS);

    // when
    carRaceController.printRaceResult();

    // then
    expect(getWinnersSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(TEST_WINNERS));
  });
});

describe('유효하지 않은 입력을 할 경우, CarRaceController 클래스 기능 테스트', () => {
  test('자동차 이름이 유효하지 않을 경우 에러를 throw', async () => {
    // given
    const WRONG_TEST_CARS = 'woong,gang,cocococo';
    const TEST_TRY_COUNT = '3';
    const inputs = [WRONG_TEST_CARS, TEST_TRY_COUNT];

    mockQuestions(inputs);

    const carRaceController = new CarRaceController();

    // when, then
    expect(async () => {
      await carRaceController.setupRaceEnvironment();
    }).rejects.toThrow(ERROR_MESSAGES.overNameLength);
  });

  test('경주 시도 횟수가 유효하지 않을 경우 에러를 throw', async () => {
    // given
    const TEST_CARS = 'woong,gang,coco';
    const WRONG_TRY_COUNT = 'ab1';
    const inputs = [TEST_CARS, WRONG_TRY_COUNT];

    mockQuestions(inputs);

    const carRaceController = new CarRaceController();

    // when, then
    expect(async () => {
      await carRaceController.setupRaceEnvironment();
    }).rejects.toThrow(ERROR_MESSAGES.invalidCountType);
  });
});
