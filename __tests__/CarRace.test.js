import CarRace from '../src/CarRace';

describe('CarRace 생성자 확인', () => {
  test('racingCars, attempts 필드 확인', () => {
    // given
    const racingCarInput = 'pobi,woni';
    const attemptsInput = '1';

    // when
    const carRace = new CarRace(racingCarInput, attemptsInput);

    // then
    expect(carRace.racingCars).toEqual([
      new RacingCar('pobi'),
      new RacingCar('woni'),
    ]);
    expect(carRace.attempts).toEqual(1);
  });
});
