import { Track, User } from '../../../src/domain/index.js';

const users = [new User('레이서'), new User('레이서2')];
const finalLap = 5;

describe('Track 테스트', () => {
  let track;

  beforeEach(() => {
    // given
    track = new Track(users, finalLap);
  });

  it('`currentLap`의 초기값은 `1`이다.', () => {
    // when & then
    expect(track.getCurrentLap()).toBe(1);
  });

  it('인자로 입력받은 랩을 `finalLap`에 가진다.', () => {
    // when & then

    expect(track.getFinalLap()).toBe(finalLap);
  });

  it('인자로 입력받은 유저 목록을 `users`에 가진다.', () => {
    // when & then
    expect(track.getUsers()).toBe(users);
  });

  it('`processLap()`을 호출시 `currentLap`는 `1` 증가한다.', () => {
    // when
    track.processLap();

    // then
    expect(track.getCurrentLap()).toBe(2);
  });

  it('`processLap()`을 호출시 `users`의 `user`들은 `accelerate`를 호출한다.', () => {
    // when
    track.processLap();
    const userAccelerateSpy = Array.from(track.getUsers, (user) => jest.spyOn(user, 'accelerate'));

    // then
    userAccelerateSpy.forEach((spy) => expect(spy).toHaveBeenCalled());
  });

  it('`isEnd()`는 `currentLap`가 `finalLap` 보다 작으면 `false`를 반환한다.', () => {
    // when & then
    expect(track.isEnd()).toBeFalsy();
  });

  it('`isEnd()`는 `currentLap`가 `finalLap` 보다 작으면 `true`를 반환한다.', () => {
    // when
    for (let i = 0; i < 4; i += 1) {
      track.processLap();
    }

    // then
    expect(track.isEnd()).toBeTruthy();
  });
});
