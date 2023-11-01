import { Console } from '@woowacourse/mission-utils';
import Race from '../src/utils/race';
import Car from '../src/utils/car';

describe('Race class Test', () => {
  let car1;
  let car2;
  let car3;
  let race;

  beforeEach(() => {
    car1 = new Car('Car1');
    car2 = new Car('Car2');
    car3 = new Car('Car3');
    race = new Race([car1, car2, car3]);
  });

  test('advance 메서드가 호출되면 해당 자동차를 전진시키는 메소드를 호출한다.', () => {
    const spyAdvanceCar = jest.spyOn(Car.prototype, 'advanceCar');

    race.advance();

    expect(spyAdvanceCar).toHaveBeenCalledTimes(race.cars.length);
  });

  test('printRaceResult 메서드가 호출되면 매번 올바른 결과를 출력해야한다.', () => {
    car1.move = 3;
    car2.move = 1;
    car3.move = 4;

    const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});

    race.printRaceResult();

    expect(logSpy).toHaveBeenCalledWith('Car1 : ---');
    expect(logSpy).toHaveBeenCalledWith('Car2 : -');
    expect(logSpy).toHaveBeenCalledWith('Car3 : ----');
  });

  test('getWinner 메서드는 최고점을 가진 자동차의 이름을 반환해야한다.', () => {
    car1.move = 3;
    car2.move = 1;
    car3.move = 4;

    const winner = race.getWinner();

    expect(winner).toEqual(['Car3']);
  });

  test('getWinner 메서드는 최고점을 가진 자동차가 2개 이상일 경우 모두 우승자로 반환한다.', () => {
    car1.move = 3;
    car2.move = 4;
    car3.move = 4;

    const winner = race.getWinner();

    expect(winner).toEqual(['Car2', 'Car3']);
  });

  test(`printWinner 메서드는 getWinner 메서드를 호출한 후, ','로 구분하여 우승자를 출력한다.`, () => {
    car1.move = 3;
    car2.move = 4;
    car3.move = 4;

    const getWinnerSpy = jest.spyOn(race, 'getWinner');
    const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});

    race.printWinner();

    expect(getWinnerSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : Car2, Car3');
  });
});
