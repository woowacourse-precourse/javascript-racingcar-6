import NumberGenerator from "../src/utils/NumberGenerator";

describe('랜덤한 숫자를 만들어내는지 확인', () => {
  let numberGenerator;

  beforeEach(() => {
    numberGenerator = new NumberGenerator();
  })

  test('0-9 사이의 숫자인지 확인', () => {
    const value = numberGenerator.getRandomNumber();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(9);
  });
  
  test('다른 숫자를 반환하고 있는지 확인', () => {
    const values = new Set();
    for (let i = 0; i < 100; i++) {
      values.add(numberGenerator.getRandomNumber());
    }
    expect(values.size).toBeGreaterThan(1);
  });
})

