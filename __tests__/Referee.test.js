import Car from '../src/Car';
import Referee from '../src/Referee';

jest.mock('../src/Car.js');
Car.mockImplementation((name, movement) => ({
  name,
  movement,
  move: jest.fn(),
}));

test('경주가 끝난 후, 가장 많이 전진한 자동차(들)을 반환한다.', () => {
  const pobi = Car('pobi', '-');
  const woni = Car('woni', '---');
  const jun = Car('jun', '---');
  const inputs = [pobi, woni, jun];
  const expected = [woni, jun];

  const outputs = Referee.decideWinners(inputs);

  expect(outputs).toStrictEqual(expected);
});
