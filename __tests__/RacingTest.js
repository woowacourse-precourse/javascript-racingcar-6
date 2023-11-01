import RacingController from '../src/controller/RacingController.js';
import RacingCar from '../src/model/RacingCar.js';
import RacingGame from '../src/model/RacingGame.js';

describe('RacingCar test', () => {
  const car = new RacingCar();
  const input = 'pobi';

  test('자동차 이름 생성 테스트', () => {
    car.setCarName(input);
    const result = car.getCarName();

    expect(result).toEqual('pobi');
  });

  test('자동차 이동 테스트', () => {
    car.moveForward();
    const result = car.getCarPosition();

    expect(result).toEqual(1);
  });
});

describe('RacingGame test', () => {
  const racingController = new RacingController();
  const racingGame = new RacingGame();

  test('자동차 등록 테스트', () => {
    const input = ['pobi', 'woni'];
    const ouput = [
      { carName: 'pobi', carPosition: 0 },
      { carName: 'woni', carPosition: 0 },
    ];
    const car = racingController.createCars(input);
    racingGame.setRacingCar(car);
    const result = racingGame.getRacingCar();

    expect(result).toEqual(ouput);
  });
});
