import { Console } from '@woowacourse/mission-utils';
import InputView from '../src/View/InputView';

const mockInputs = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('InputView 단위 테스트', () => {
  test('readCarNames 메서드로 Car의 이름을 입력받고 반환', () => {
    const name = 'mike,paul,joseph';

    mockInputs(name);

    expect(InputView.readCarNames()).resolves.toEqual(name);
  });

  test('readCarNames 메서드로 Car의 이름을 입력받고 반환', () => {
    const roundCounts = 5;

    mockInputs(roundCounts);

    expect(InputView.readRoundCounts()).resolves.toEqual(roundCounts);
  });
});