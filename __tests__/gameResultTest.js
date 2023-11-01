import CreateCarMoveCount from "../src/class/randomNumber.js";
import MoveCar from "../src/class/moveCar.js";

test('게임 시도 횟수 만큼 숫자를 생성하고, 게임 진행상황을 출력', () => {
  const tryCount = 5;
  const moveCar = new MoveCar(['carTest1', 'carTest2', 'carTest3']);
  const mockRandomNumber = jest.spyOn(CreateCarMoveCount.prototype, 'createRandomNumber');

  moveCar.startRacing(tryCount);

  const totalCalls = tryCount * moveCar.carNames.length;
  expect(mockRandomNumber).toHaveBeenCalledTimes(totalCalls);
});