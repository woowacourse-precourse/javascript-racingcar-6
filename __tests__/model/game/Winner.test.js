import winner from "../../../src/MVC/controller/game/winner";
import testName from "../../../src/MVC/Constants/testName";

describe("winner 함수 테스트", () => {
  test("가장 많은 하이픈을 가진 자동차가 1대인 경우", () => {
    const keyValue = [{ [testName.carOne]: "----" }, {[testName.carTwo]: "--"}, {[testName.carThree]: "---" }];
    const result = winner(keyValue);
    expect(result).toEqual([testName.carOne]);
  });

  test("가장 많은 하이픈을 가진 자동차가 여러 대인 경우", () => {
    const keyValue = [{ [testName.carFour]: "--"}, {[testName.carFive]: "----"}, {[testName.carSix]: "----" }];
    const result = winner(keyValue);
    expect(result).toEqual([testName.carFive, testName.carSix]);
  });

  test("모든 자동차의 하이픈 개수가 동일한 경우", () => {
    const keyValue = [{ [testName.carOne]: "--"}, {[testName.carFive]: "--"}, {[testName.carFour]: "--" }];
    const result = winner(keyValue);
    expect(result).toEqual([testName.carOne, testName.carFive, testName.carFour]);
  });
});
