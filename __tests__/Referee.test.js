import Car from '../src/Car';
import Referee from '../src/Referee';

jest.mock('../src/Car.js');
Car.mockImplementation((name, movement) => ({
  name,
  movement,
  move: jest.fn(),
}));

describe('경주 우승자 판정', () => {
  test('경주가 끝난 후, 가장 많이 전진한 자동차(들)을 반환한다.', () => {
    const pobi = Car('pobi', '-');
    const woni = Car('woni', '---');
    const jun = Car('jun', '---');
    const inputs = [pobi, woni, jun];
    const expected = [woni, jun];

    const outputs = Referee.decideWinners(inputs);

    expect(outputs).toStrictEqual(expected);
  });
});
describe('경기 무효 판정', () => {
  test('전진한 자동차가 없으면, false를 반환한다.', () => {
    const input = 0;
    const output = Referee.isRaceValid(input);
    expect(output).toBeFalsy();
  });
});
