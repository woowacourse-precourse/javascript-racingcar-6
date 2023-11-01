import CreateCarMoveCount from "../src/class/randomNumber";

test('0부터 9사이의 무작위 값 생성', () => {
  const createRandomNumber = new CreateCarMoveCount();
  const randomNumber = createRandomNumber.createRandomNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(0);
  expect(randomNumber).toBeLessThan(10);
});

