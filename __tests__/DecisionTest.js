import { MissionUtils } from '@woowacourse/mission-utils';
import Decision from '../src/modules/Decision.js';

const mockRandoms = (number) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
};

test.each([3, 4, 7])('전진할지 정지할지 결정', (input) => {
  // given
  const MOVING_FORWARD = 4;
  const output = input >= MOVING_FORWARD;

  mockRandoms(input);

  // when
  const { moveForward } = Decision;

  // then
  expect(moveForward()).toBe(output);
});
