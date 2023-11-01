import CarForwardRandomNumberGenerator from "../src/utils/CarForwardRandomNumberGenerator";

const mockRandoms = (numbers) => {
  CarForwardRandomNumberGenerator.RandomNumberGenerator = jest.fn();

  numbers.forEach((number) => {
    CarForwardRandomNumberGenerator.RandomNumberGenerator.mockReturnValueOnce(
      number
    );
  });
};

describe("CarForwardRandomNumberGenerator 테스트", () => {
  test("랜덤 숫자 생성", () => {
    const randomNumber = 5; // 원하는 한 자리 랜덤 숫자
    mockRandoms([randomNumber]);

    const generatedNumber =
      CarForwardRandomNumberGenerator.RandomNumberGenerator();

    expect(generatedNumber).toBe(randomNumber);
  });
});
