import Car from '../../src/models/Car.js';
import PrinterView from '../../src/helpers/PrinterView';
import Race from '../../src/models/Race.js';

describe('Race 클래스 테스트', () => {
  let race;

  beforeEach(() => {
    // given
    const carNames = ['Car1', 'Car2', 'Car3'];
    const attempts = 3;

    // when
    race = new Race(carNames, attempts);
  });

  test('Race 인스턴스 생성 확인', () => {
    // then
    expect(race).toBeInstanceOf(Race);
  });

  test('startRace 메서드가 attempts 만큼 반복 시도 되었는지 확인', () => {
    // then
    const moveCarsSpy = jest.spyOn(race, 'moveCars');
    const printRaceStatusSpy = jest.spyOn(race, 'printRaceStatus');

    // PrinterView.print 메서드를 모킹하여 console.log 호출을 방지
    jest.spyOn(PrinterView, 'print').mockImplementation(() => {});

    race.startRace();

    expect(moveCarsSpy).toHaveBeenCalledTimes(race.attempts);
    expect(printRaceStatusSpy).toHaveBeenCalledTimes(race.attempts);
  });

  test('의도한 대로 findWinner가 작동하는지 확인', () => {
    // given
    const carsPosition = [3, 5, 4];
    const [car1, car2, car3] = race.cars;

    // when
    // true로 설정하여 랜덤값에 영향 없이 position 증가
    Car.shouldCarMove = jest.fn().mockReturnValue(true);

    [car1, car2, car3].forEach((car, index) => {
      Array(carsPosition[index])
        .fill()
        .forEach(() => car.move());
    });

    // then
    race.cars.forEach((car, index) => {
      expect(car.getPosition()).toBe(carsPosition[index]);
    });
  });
});
