import RacingGame from '../src/model/RacingGame.js';
import RacingGameController from '../src/controller/RacingGameController.js';

describe('RacingGame test', () => {
  const racingController = new RacingGameController();
  const racingGame = new RacingGame();
  const input = ['pobi', 'woni'];

  test('자동차 등록 테스트', () => {
    const ouput = [
      { carName: 'pobi', carPosition: 0 },
      { carName: 'woni', carPosition: 0 },
    ];
    const car = racingController.createNewCar(input);
    racingGame.setRacingCar = car;
    const result = racingGame.getRacingCar;

    expect(result).toEqual(ouput);
  });

  // test('자동차 이동 테스트', () => {
  //   car.move();
  //   const result = car.getCarPosition;

  //   expect(result).toEqual(1);
  // });
});
