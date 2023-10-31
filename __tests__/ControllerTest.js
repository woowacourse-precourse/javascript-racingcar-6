import GameController from "../src/utils/GameController";

describe("게임 컨트롤러 테스트", () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  test("차 이름으로 객체 만들기", () => {
    const carArr = ["red", "blue", "pink"];
    gameController.makeCarsObjWithNum(carArr);

    expect(gameController.carsWithMoveNum).toEqual({
      red: 0,
      blue: 0,
      pink: 0,
    });
  });

  test("우승자 선택하기", () => {
    const carArr = ["red", "blue", "pink"];
    gameController.carsWithMoveNum = {
      red: 2,
      blue: 0,
      pink: 2,
    };

    expect(gameController.selectWinner(carArr)).toEqual(["red", "pink"]);
  });

  test("랜덤 숫자에 따라 결과 그리기", () => {
    gameController.carsWithMoveNum = {
      red: 0,
      blue: 0,
    };
    expect(gameController.makeResultByNum("red", 4)).toBe("-");
    expect(gameController.carsWithMoveNum).toEqual({
      red: 1,
      blue: 0,
    });
  });
});
