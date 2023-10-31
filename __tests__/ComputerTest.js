import Computer from '../src/module/Computer.js';

describe('Computer 클래스 테스트', () => {
  test('round의 getter, setter 테스트', () => {
    const computer = new Computer();

    computer.round = 3;
    expect(computer.round).toEqual(3);
    expect(() => {
      computer.round = -1;
    }).toThrow('[ERROR]');
  });
});