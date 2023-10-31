import testName from "../../../../src/mvc/constants/testName";
import Winner from "../../../../src/mvc/controller/game/Winner";

describe("winner 함수 테스트", () => {
  test("가장 많은 하이픈을 가진 자동차가 1대인 경우", () => {
    // given
    const keyValue = [{ [testName.carOne]: "----" }, {[testName.carTwo]: "--"}, {[testName.carThree]: "---" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([testName.carOne]);
  });

  test("가장 많은 하이픈을 가진 자동차가 여러 대인 경우", () => {
    // given
    const keyValue = [{ [testName.carFour]: "--"}, {[testName.carFive]: "----"}, {[testName.carSix]: "----" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([testName.carFive, testName.carSix]);
  });

  test("모든 자동차의 하이픈 개수가 동일한 경우", () => {
    // given
    const keyValue = [{ [testName.carOne]: "--"}, {[testName.carFive]: "--"}, {[testName.carFour]: "--" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([testName.carOne, testName.carFive, testName.carFour]);
  });
});
