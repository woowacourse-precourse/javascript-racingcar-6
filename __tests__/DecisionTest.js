import { MissionUtils } from '@woowacourse/mission-utils';
import Decision from '../src/modules/Decision.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

test('전진할지 정지할지 결정', () => {
  // given
  const randoms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputs = randoms.map((random) => random >= 4);

  mockRandoms([...randoms]);

  // when
  const { moveForward } = Decision;

  // then
  outputs.forEach((output) => {
    expect(moveForward()).toBe(output);
  });
});
