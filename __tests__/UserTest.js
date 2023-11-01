import { Console } from '@woowacourse/mission-utils';
import User from '../src/User.js';

describe('User 클래스', () => {
  let user;

  beforeEach(() => {
    user = new User({ initialState: { playNumber: 0, carList: [] } });
  });

  test("'promptCarNames' 메소드가 정상적으로 실행되는지 테스트", async () => {
    Console.readLineAsync = jest
      .fn()
      .mockImplementationOnce(() => 'phobi,daeun');

    await user.promptCarNames();

    expect(user.state.carList).toEqual(['phobi', 'daeun']);
  });

  test("'promptPlayNumber' 메소드가 정상적으로 실행되는지 테스트", async () => {
    Console.readLineAsync = jest.fn().mockImplementationOnce(() => '3');

    await user.promptPlayNumber();

    expect(user.state.playNumber).toBe(3);
  });

  test('자동차 이름과 시도 횟수 입력 시, validate 메소드들이 정상적으로 동작하는지 테스트', () => {
    expect(() => {
      user.validateCarList(['phobi', 'longnameexceeds5']);
    }).toThrow('[ERROR] 이름이 잘못된 형식입니다.');

    expect(() => {
      user.validatePlayNumber('notNumber');
    }).toThrow('[ERROR] 이동 횟수가 잘못된 형식입니다.');
  });
});
