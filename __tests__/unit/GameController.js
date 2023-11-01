/* eslint-disable max-lines-per-function */
import GameController from '../../src/controller/GameController.js';
import Car from '../../src/model/Car.js';

jest.mock('../../src/view/inputView.js', () => ({
  getUserInputCarName: jest.fn(() => 'Tesla,KIA,현대'),
  getUserInputTryCount: jest.fn(() => '5'),
}));

describe('GameController', () => {
  test('setCars 메서드 호출 시 객체 생성 및 저장 가능 여부', async () => {
    // Arrange
    const gameController = new GameController();

    // Act
    await gameController.setCars();

    // Assert
    expect(gameController.cars).toHaveLength(3);
  });

  test('입력된 시도 횟수 처리 가능 여부', async () => {
    // Arrange
    const gameController = new GameController();

    // Act
    const result = await gameController.handleTryCount();

    // Assert
    expect(Number(result)).toBe(5);
  });

  test('최종 우승자 리턴 가능 여부', () => {
    // Arrange
    const gameController = new GameController();
    const car1 = new Car('Tesla');
    const car2 = new Car('KIA');
    car1.moveForward();
    car2.moveForward();
    gameController.cars = [car1, car2];

    // Act
    const winner = gameController.getWinner();

    // Assert
    expect(winner).toEqual(['Tesla', 'KIA']);
  });

  test('자동차 이동 및 결과 리턴 가능 여부', () => {
    // Arrange
    const gameController = new GameController();
    const car1 = new Car('Tesla');
    const car2 = new Car('KIA');
    gameController.cars = [car1, car2];

    // Act
    gameController.moveCarsAndPrintResults();

    // Assert
    expect(car1.getPosition()).toBeGreaterThanOrEqual(0);
    expect(car2.getPosition()).toBeGreaterThanOrEqual(0);
  });

  test('tryCount 처리 및 시도 횟수 만큼 moveCarsAndPrintResults 메서드 호출', async () => {
    // Arrange
    const gameController = new GameController();
    const tryCount = 5;
    const moveCarsAndPrintResultsSpy = jest.spyOn(gameController, 'moveCarsAndPrintResults');

    // Act
    await gameController.raceCar(tryCount);

    // Assert
    expect(moveCarsAndPrintResultsSpy).toHaveBeenCalledTimes(tryCount);
  });
});
