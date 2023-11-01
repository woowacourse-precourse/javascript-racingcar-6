import TEST_NAME from "../../../../src/constants/testName";
import Winner from "../../../../src/controller/game/Winner";

describe("winner 함수 테스트", () => {
  test("가장 많은 하이픈을 가진 자동차가 1대인 경우", () => {
    // given
    const keyValue = [{ [TEST_NAME.carOne]: "----" }, {[TEST_NAME.carTwo]: "--"}, {[TEST_NAME.carThree]: "---" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([TEST_NAME.carOne]);
  });

  test("가장 많은 하이픈을 가진 자동차가 여러 대인 경우", () => {
    // given
    const keyValue = [{ [TEST_NAME.carFour]: "--"}, {[TEST_NAME.carFive]: "----"}, {[TEST_NAME.carSix]: "----" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([TEST_NAME.carFive, TEST_NAME.carSix]);
  });

  test("모든 자동차의 하이픈 개수가 동일한 경우", () => {
    // given
    const keyValue = [{ [TEST_NAME.carOne]: "--"}, {[TEST_NAME.carFive]: "--"}, {[TEST_NAME.carFour]: "--" }];
    // when
    const winner = new Winner();
    const result = winner.whoWinner(keyValue);
    // then
    expect(result).toEqual([TEST_NAME.carOne, TEST_NAME.carFive, TEST_NAME.carFour]);
  });
});
