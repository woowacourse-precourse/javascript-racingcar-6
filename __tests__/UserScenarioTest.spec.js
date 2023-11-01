import Game from '../src/module/Game';
import Car from '../src/module/Car';
import { Console } from '@woowacourse/mission-utils';
import { validateCarName, validateMoveNum } from '../src/utils/validateFn';
import { ERROR_MESSAGE } from '../src/constant/message';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('1. 자동차 이름을 입력 했을때', () => {
  test('1-1. 입력이 잘못되었을때', () => {
    // 유효성 검사
    const invalidInputArr = [
      ['dong', 'gyuuuun', 'kim'],
      ['dong', '', 'kim'],
      ['do ng', 'gy   ', 'kim'],
      ['dong', 'dong'],
    ];

    const errorMessage = [
      ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
      ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
      ERROR_MESSAGE.INVALID_CAR_NAME_CHAR,
      ERROR_MESSAGE.INVALID_CAR_NAME_UNIQUE,
    ];

    for (let i = 0; i < invalidInputArr.length; i++) {
      expect(() => validateCarName(invalidInputArr[i])).toThrow(
        errorMessage[i],
      );
    }
  });
  test('1-2. 입력이 제대로 되었을때', async () => {
    const validateInput = 'dong,gyun,kim';
    const expectCarList = [new Car('dong'), new Car('gyun'), new Car('kim')];

    // CarList 확인
    mockQuestions(validateInput);

    const game = new Game();
    await game.init();
    await game.createCars();
    const { carList } = game.getCarList();

    expect(carList.cars).toEqual(expectCarList);
  });
});

describe('2. 시도할 횟수를 입력 했을때', () => {
  test('2-1. 입력이 잘못되었을때', () => {
    // 유효성 검사
    const invalidInput = ['a', '-1', '0'];

    const errorMessage = [
      ERROR_MESSAGE.INVALID_INPUT_TYPE,
      ERROR_MESSAGE.INVALID_NUMBER_RANGE,
      ERROR_MESSAGE.INVALID_NUMBER_RANGE,
    ];

    for (let i = 0; i < invalidInput.length; i++) {
      expect(() => validateMoveNum(invalidInput[i])).toThrow(errorMessage[i]);
    }
  });

  test('2-2. 입력이 제대로 되었을때', async () => {
    const validateInput = '22';
    const expectMoveNum = '22';

    // 입력값과 moveNum 비교
    mockQuestions(validateInput);

    const game = new Game();
    await game.moveQuestion();
    const { moveNum } = game.getCarMoveNum();

    expect(moveNum).toEqual(expectMoveNum);
  });
});

describe('3. 실행결과 출력', () => {
  test('CarList의 메소드 호출 횟수와 moveNum의 값 비교', async () => {
    const userCarNameInput = 'dong,gyun,kim';
    const userMoveNumInput = 5;

    mockQuestions(userCarNameInput);

    const game = new Game();
    await game.init();
    await game.createCars();
    const { carList } = game.getCarList();

    mockQuestions(userMoveNumInput);
    await game.moveQuestion();
    const { moveNum } = game.getCarMoveNum();

    const raceSpy = jest.spyOn(carList, 'race');
    const printCarCurrnetStateSpy = jest.spyOn(carList, 'printCarCurrnetState');

    await game.process();

    expect(raceSpy).toHaveBeenCalledTimes(moveNum);
    expect(printCarCurrnetStateSpy).toHaveBeenCalledTimes(moveNum);
  });
});
