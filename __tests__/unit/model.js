import GameModel from "../../src/model/GameModel.js";

describe("class Game", () => {
  const DATA = { carNames: ["pobi", "woni"], tryCount: 5 };

  test("initData - 게임 초기 데이터 설정", () => {
    // given
    const game = new GameModel();

    // when
    game.initData(DATA);

    // then
    expect(game.getData()).toEqual({
      cars: [
        { name: "pobi", distance: 0 },
        { name: "woni", distance: 0 },
      ],
      tryCount: 5,
      winners: [],
      currentTryCount: 0,
    });
  });

  test("setData - 게임 데이터 변경", () => {
    // given
    const newData = {
      tryCount: 3,
      currentTryCount: 3,
      cars: [
        { name: "pobi", distance: 1 },
        { name: "woni", distance: 0 },
      ],
      winners: ["pobi"],
    };

    const game = new GameModel();
    game.initData(DATA);

    // when
    game.setData(newData);

    // then
    expect(game.getData()).toEqual(newData);
  });
});