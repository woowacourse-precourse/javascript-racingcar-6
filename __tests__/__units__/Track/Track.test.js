import { MissionUtils } from '@woowacourse/mission-utils';

import { Track, User } from '../../../src/domain/index.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('Track 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('`currentLap`의 초기값은 `1`이다.', () => {
    // given
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when & then
    expect(track.getCurrentLap()).toBe(1);
  });

  it('인자로 입력받은 랩을 `finalLap`에 가진다.', () => {
    // given
    const finalLap = 5;
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when & then
    expect(track.getFinalLap()).toBe(finalLap);
  });

  it('인자로 입력받은 유저 목록을 `users`에 가진다.', () => {
    // given
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when & then
    expect(track.getUsers()).toBe(users);
  });

  it('`processLap()`을 호출시 `currentLap`는 `1` 증가한다.', () => {
    // given
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when
    track.processLap();

    // then
    expect(track.getCurrentLap()).toBe(2);
  });

  it('`processLap()`을 호출시 `users`의 `user`들은 `accelerate`를 호출한다.', () => {
    // given
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when
    const userAccelerateSpy = Array.from(users, (user) => jest.spyOn(user, 'accelerate'));
    track.processLap();

    // then
    userAccelerateSpy.forEach((spy) => expect(spy).toHaveBeenCalled());
  });

  it('`isEnd()`는 `currentLap`가 `finalLap` 보다 작거나 동일하면 `false`를 반환한다.', () => {
    // given
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, 5);

    // when & then
    expect(track.isEnd()).toBeFalsy();
  });

  it('`isEnd()`는 `currentLap`가 `finalLap` 보다 크면 `true`를 반환한다.', () => {
    // given
    const lap = 2;
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, lap);

    // when
    for (let i = 0; i < lap; i += 1) {
      track.processLap();
    }

    // then
    expect(track.isEnd()).toBeTruthy();
  });

  it('`getCurrentLapResult()`는 현재 랩의 결과를 반환합니다.', () => {
    // given
    const lap = 3;
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, lap);
    mockRandoms([5, 2, 5, 3, 1, 2]);

    // when
    for (let i = 0; i < lap; i += 1) {
      track.processLap();
    }

    // then
    expect(track.getCurrentLapResult()).toEqual({
      레이서: '--',
      레이서2: '',
    });
  });

  it.each([
    { randoms: [5, 2, 5, 3], winners: ['레이서1'] },
    { randoms: [5, 2, 2, 4], winners: ['레이서1', '레이서2'] },
  ])('`getCurrentWinners()`는 현재 랩의 선두주자들을 반환합니다.', ({ randoms, winners }) => {
    // given
    const lap = 2;
    const users = [User.of('레이서1'), User.of('레이서2')];
    const track = Track.of(users, lap);
    mockRandoms(randoms);

    // when
    for (let i = 0; i < lap; i += 1) {
      track.processLap();
    }

    // then
    expect(track.getCurrentWinners()).toEqual(winners);
  });
});
