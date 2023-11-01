import { Console, Random } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const game = new App();

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능 구현 테스트", () => {
  test("실행 결과 테스트", () => {
    const outputs = ["pobi : -", "jun : -"];
    const logSpy = getLogSpy();
    const carNames = ["pobi", "jun"];
    const random = [5, 3, 1, 6];

    mockRandoms([...random]);

    game.carData = carNames;
    game.movementCount = 2;

    game.start();

    game.carData.map((name) =>
      game.advanceCount.push({ carName: name, advance: 0 })
    );

    game.getResult();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("우승자 한 명일 경우 테스트", () => {
    const outputs = ["최종 우승자 : pobi"];
    const logSpy = getLogSpy();
    const carList = [
      { carName: "pobi", advance: 3 },
      { carName: "jun", advance: 2 },
    ];

    game.advanceCount = carList;
    game.getWinner();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("우승자 여러 명일 경우 테스트", () => {
    const outputs = ["최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();
    const carList = [
      { carName: "pobi", advance: 3 },
      { carName: "woni", advance: 3 },
      { carName: "jun", advance: 2 },
    ];

    game.advanceCount = carList;
    game.getWinner();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
