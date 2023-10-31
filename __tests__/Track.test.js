import { Random } from '@woowacourse/mission-utils';
import Track from '../src/models/Track.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Track method test', () => {
  test('4이상 값을 넣었을 때 true가 반환 되는지', async () => {
    // when
    const moreThan4 = [9, 8];
    const resultTrue = mockRandoms([...moreThan4]);

    const track = new Track();
    const trueTest = await track.checkCarMove(resultTrue);

    // then
    expect(trueTest).toBeTruthy();
  });
});
