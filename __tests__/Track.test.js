import { Random } from '@woowacourse/mission-utils';
import Track from '../src/models/Track.js';
import Car from '../src/models/Car.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Track method test', () => {
  test('4이상 값을 넣었을 때 true가 반환 되는지', async () => {
    // given
    const resultTrue = mockRandoms([9, 4]);

    // when
    const track = new Track();
    const trueTest = await track.checkCarMove(resultTrue);

    // then
    expect(trueTest).toBeTruthy();
  });

  test('챔피언을 반환한다.', async () => {
    // given
    const cars = ['pobi', 'woni', 'maria'].map((carName) => new Car(carName));
    const race = new Track(cars);
    mockRandoms([3, 6, 9]);

    //when
    await race.moveCarsCheckCondition();

    //then
    expect(race.getChampions().map((car) => car.getCarName())).toEqual(['woni', 'maria']);
  });
});
