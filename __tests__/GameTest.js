import Game from "../src/model/Game.js";

describe("게임 클래스 테스트", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe("게임 실행 함수 테스트", () => {
    test("자동차 이름 개수 만큼 점수 배열이 생성된다.", () => {
      const cars = ["hyuk", "pobi", "jun"];
      const number = 5;

      expect(game.execute(cars, number).length).toBe(3);
    });

    test("주어진 횟수 만큼 함수가 실행된다.", () => {
      const cars = ["hyuk", "pobi", "jun"];
      const number = 5;
      game.executeByRound = jest.fn();

      game.execute(cars, number);
      expect(game.executeByRound).toBeCalledTimes(5);
    });
  });

  describe("우승자 선발 테스트", () => {
    test("가장 높은 점수의 1명의 우승자가 출력된다.", () => {
      const cars = ["hyuk", "pobi", "jun"];
      const result = ["-----", "---", "----"];

      expect(game.selectWinner(cars, result)).toEqual(["hyuk"]);
    });

    test("공동 우승자일 경우 모두 출력한다.", () => {
      const cars = ["hyuk", "pobi", "jun"];
      const result = ["-----", "-----", "----"];

      expect(game.selectWinner(cars, result)).toEqual(["hyuk", "pobi"]);
    });
  });
});
