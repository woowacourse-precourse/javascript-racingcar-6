import Racing from '../src/Racing.js';

describe('Racing 단위 테스트', () => {
  const carNames = ['pobi','woni','jun'];
  const count = 2;
  const data = {
    generateRandomNumbers: jest.fn(),
  }

  const manager = new Racing(carNames, count, data);

  test('무작위값이 4 이상의 값이 나올 경우 true를 반환하는지', () => {
    data.generateRandomNumbers.mockImplementation(() => 4);
    expect(manager.validAdvance()).toBe(true);
    data.generateRandomNumbers.mockImplementation(() => 7);
    expect(manager.validAdvance()).toBe(true);
  });

  test('무작위값이 4 미만의 값이 나올 경우 false를 반환하는지', () => {
    data.generateRandomNumbers.mockImplementation(() => 2);
    expect(manager.validAdvance()).toBe(false);
    data.generateRandomNumbers.mockImplementation(() => 0);
    expect(manager.validAdvance()).toBe(false);
  });

  test('게임이 진행됨에 따라 상태를 반환 하는지', () => {
    data.generateRandomNumbers.mockImplementation(() => 4);
    expect(manager.result()).toEqual([[1, 1, 1], [2, 2, 2]]);
  })

  test('올바른 우승자를 형식에 맞게 반환하는지', () => {
    manager.state = [0, 1, 2];
    expect(manager.determineWinner()).toEqual(['jun']);
    manager.state = [2, 0, 2];
    expect(manager.determineWinner()).toEqual(['pobi','jun']);
  })
});