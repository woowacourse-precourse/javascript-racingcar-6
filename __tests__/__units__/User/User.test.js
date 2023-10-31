import { Car, User } from '../../../src/domain/index.js';

describe('User 테스트', () => {
  it('초기값으로 `car`에 `Car`를 가진다.', () => {
    // given
    const user = User.of('이름');

    // when & then
    expect(user.getCar()).toBeInstanceOf(Car);
  });

  it.each([{ name: 'j' }, { name: 'ja' }, { name: 'jam' }, { name: 'jame' }, { name: 'james' }])(
    '인자로 입력받은 값을 `name`에 가진다.',
    ({ name }) => {
      // given
      const user = User.of(name);

      // when & then
      expect(user.getName()).toBe(name);
    },
  );

  it('`accelerate()`를 호출 시 인자가 난수를 기반으로 이상이면 `car`를 `move` 합니다.', () => {
    // given
    const user = User.of('이름');
    const moveSpy = jest.spyOn(user.getCar(), 'move');

    // when
    user.accelerate();

    // then
    expect(moveSpy).toHaveBeenCalled();
  });
});
