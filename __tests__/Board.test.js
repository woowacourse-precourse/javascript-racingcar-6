import Board from "../src/Board";
import { Console, Random } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('Test Board.js', () => {
  test('Car 객체 생성 (Board > setCars)', async () => {
    // given
    const carNames = ['car1', 'car2', 'car3'];
    const inputs = ['car1,car2,car3'];
    mockQuestions(inputs);

    // when
    const board = new Board();
    await board.setCars();
    const cars = board.getCars();

    // then
    cars.forEach((car, index) => {
      expect(car.getName()).toEqual(carNames[index]);
    })
  });

  test('Car 이름 유효성검사/예외처리 (Board > setCars > #validateCarNames', async () => {
    // given
    const inputs = ['car,IsNotCar'];
    mockQuestions(inputs);

    // when
    const board = new Board();

    // then
    await expect(board.setCars()).rejects.toThrow("[ERROR]");
  });

  test('턴 수 입력 (Board > setNumTurns)', async () => {
    // given
    const inputs = ['5'];
    mockQuestions(inputs);

    // when
    const board = new Board();
    await board.setNumTurns();

    // then
    expect(board.getNumTurns()).toBe(5);
  });

  test.each([
    [['0']], [['-1']], [['a']]
  ])('턴 수 유효성검사/예외처리 (Board > setNumTurns > #validateNumTurns)', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const board = new Board();

    // then
    await expect(board.setNumTurns()).rejects.toThrow("[ERROR]");
  });

  test('우승자 선발 (Board > pickOutWinner)', async () => {
    // given
    const MOVE = 4;
    const STOP = 3;
    const inputs = ['car1,car2']
    const output = '최종 우승자 : car1'
    const randoms = [MOVE, STOP];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const board = new Board();
    await board.setCars();
    board.executeTurn();
    board.pickOutWinner();
    board.printFinalResult();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});