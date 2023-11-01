import { Console, Random } from '@woowacourse/mission-utils';
import { startGame } from '../src/Domain/RacingGame';

const mockReadLineAsync = (inputs) => {
  const inputsCopy = [...inputs];
  Console.readLineAsync = jest.fn().mockImplementation(() => {
    const input = inputsCopy.shift();
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

describe('게임 로직 테스트', () => {
  test('startGame - 전진', async () => {
    const testInputs = ['Car1,Car2', '2'];
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD];
    mockReadLineAsync(testInputs);
    mockRandoms([...randoms]);

    const result = await startGame();

    expect(result[0].distance).toEqual(1);
    expect(result[1].distance).toEqual(2);
  });
});
