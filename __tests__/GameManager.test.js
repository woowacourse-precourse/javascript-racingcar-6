import { Console, Random } from '@woowacourse/mission-utils';
import GameManager from '../src/GameManager.js';
import { MAX_RANGE, MIN_RANGE } from '../src/constants/constants.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

test('자동차의 전진/정지 결과를 받아서, 형식에 맞게 출력한다', async () => {
  const logSpy = getLogSpy();
  const gameManager = new GameManager();
  const GO = MAX_RANGE;
  const STOP = MIN_RANGE;
  const inputs = ['pobi,woni,jun', '1'];
  const randoms = [GO, STOP, GO];
  const expected = ['pobi : -', 'woni : ', 'jun : -'];

  mockQuestions(inputs);
  mockRandoms([...randoms]);

  await gameManager.recruitCars();
  await gameManager.inputNumberOfAttempt();
  gameManager.announceInterimResult();

  expected.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

