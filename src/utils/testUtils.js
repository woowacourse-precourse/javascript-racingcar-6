import { Console, Random } from "@woowacourse/mission-utils";

export const mockReadLineAsync = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(async () => input);
};

export const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange
  );
};
