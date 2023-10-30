import RacingGame from "../../src/MVC/model/RacingGame.js";

describe("정상 진행 테스트", () => {
  test("key : value 값이 정상적으로 분리 되어야 함.", async () => {
    // given
    const name = ["hyuri","hyu","rim"];
    const number = 4;
    const racingGame = new RacingGame();

    // when, then
    const expectedKeyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    expect(racingGame.nameToKeyValueConverter(name, number)).toEqual(
      expectedKeyValue
    );
  });
});
