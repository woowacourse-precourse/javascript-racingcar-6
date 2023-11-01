import ERROR_MESSAGE from '../../../src/constants/error.js';
import { Car, Track, User } from '../../../src/domain/index.js';
import DUMMY_INPUTS from '../../constants/dummy.js';

describe('Track 예외 테스트', () => {
  it.each(DUMMY_INPUTS.withoutArray)(
    '입력받은 `users`가 배열이 아닐 경우 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        // given & when
        Track.of(input, 5);

        // then
      }).toThrow(ERROR_MESSAGE.track.isNotArrayUsers);
    },
  );

  it.each([
    { users: [User.of('레이서'), '레이서2'] },
    { users: [User.of('레이서'), 234] },
    { users: ['레이서'] },
    { users: [{ name: '레이서', car: Car.of() }] },
  ])(
    '입력받은 `users`에 `User`의 인스턴스가 아닌 요소가 존재할 경우 에러를 발생시킨다.',
    ({ users }) => {
      expect(() => {
        // given & when
        Track.of(users, 5);

        // then
      }).toThrow(ERROR_MESSAGE.track.isExistNotUserInstance);
    },
  );

  it('입력받은 `users`에 동일한 이름을 가진 요소가 존재할 경우 에러를 발생시킨다.', () => {
    expect(() => {
      // given & when
      const users = [User.of('레이서'), User.of('레이서2'), User.of('레이서')];
      Track.of(users, 5);

      // then
    }).toThrow(ERROR_MESSAGE.track.isDuplicatedUserName);
  });

  it.each(DUMMY_INPUTS.withoutNumber)(
    '입력받은 `lap`이 숫자가 아닐 경우 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        // given & when
        const users = [User.of('레이서')];
        Track.of(users, input);

        // then
      }).toThrow(ERROR_MESSAGE.track.isNotNumberLap);
    },
  );

  it.each([{ lap: 0 }, { lap: -1 }])(
    '입력받은 `lap`이 1 미만의 수일 경우 에러를 발생시킨다.',
    ({ lap }) => {
      expect(() => {
        // given & when
        const users = [User.of('레이서')];
        Track.of(users, lap);

        // then
      }).toThrow(ERROR_MESSAGE.track.isUnderMinLap);
    },
  );

  it.each([{ lap: 1.1 }, { lap: 1.2 }])(
    '입력받은 `lap`이 정수가 아닐 경우 에러를 발생시킨다.',
    ({ lap }) => {
      expect(() => {
        // given & when
        const users = [User.of('레이서')];
        Track.of(users, lap);

        // then
      }).toThrow(ERROR_MESSAGE.track.isNotIntegerLap);
    },
  );

  it('`processLap()`을 호출시 종료된 경기일 경우 에러를 에러를 발생시킨다.', () => {
    // given
    const users = [User.of('레이서')];
    const track = Track.of(users, 1);
    track.processLap();

    expect(() => {
      // when
      track.processLap();
      // then
    }).toThrow(ERROR_MESSAGE.track.isEndedTrack);
  });
});
