import { MissionUtils } from '@woowacourse/mission-utils';

import { Track, User } from '../../../src/domain/index.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

/**
 * 입력한 `loop`만큼 `track`의 `processLap`을 호출합니다.
 * @param {Track} track
 * @param {number} loop
 */
const processLapLoop = (track, loop) => {
  for (let i = 0; i < loop; i += 1) {
    track.processLap();
  }
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
    processLapLoop(track, lap);

    // then
    expect(track.isEnd()).toBeTruthy();
  });

  it.each([
    { randoms: [5, 2, 5, 3], result: { 레이서: '--', 레이서2: '' } },
    { randoms: [2, 2, 1, 3], result: { 레이서: '', 레이서2: '' } },
    { randoms: [5, 7, 5, 9], result: { 레이서: '--', 레이서2: '--' } },
  ])('`getCurrentLapResult()`는 현재 랩의 결과를 반환합니다.', ({ randoms, result }) => {
    // given
    const lap = 2;
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, lap);
    mockRandoms(randoms);

    // when
    processLapLoop(track, lap);

    // then
    expect(track.getCurrentLapResult()).toEqual(result);
  });

  it.each([
    { randoms: [5, 2, 5, 3], winners: ['레이서'] },
    { randoms: [5, 2, 2, 4], winners: ['레이서', '레이서2'] },
  ])('`getCurrentWinners()`는 현재 랩의 선두주자들을 반환합니다.', ({ randoms, winners }) => {
    // given
    const lap = 2;
    const users = [User.of('레이서'), User.of('레이서2')];
    const track = Track.of(users, lap);
    mockRandoms(randoms);

    // when
    processLapLoop(track, lap);

    // then
    expect(track.getCurrentWinners()).toEqual(winners);
  });
});
