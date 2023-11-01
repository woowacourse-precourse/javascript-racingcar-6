import CreateCarMoveCount from "../src/class/randomNumber.js";
import MoveCar from "../src/class/moveCar.js";

test('4 이상의 무작위 값이 나오면 전진', () => {
  const moveCar = new MoveCar(['carTest1', 'carTest2', 'carTest3']);
  jest.spyOn(CreateCarMoveCount.prototype, 'createRandomNumber').mockReturnValue(4);

  const result = moveCar.carMoveCompare();
  expect(result).toBe(true);
});

test('3 이하의 무작위 값이 나오면 정지', () => {
  const moveCar = new MoveCar(['carTest1', 'carTest2', 'carTest3']);
  jest.spyOn(CreateCarMoveCount.prototype, 'createRandomNumber').mockReturnValue(3);

  const result = moveCar.carMoveCompare();
  expect(result).toBe(false);
});