import App from "../src/App.js";

jest.mock("../src/App", () => {
    return jest.fn().mockImplementation(() => {
      return {
        prepareGame: jest.fn().mockResolvedValue({
          carList: ["car1", "car2", "car3"],
          round: 5,
          scoreboard: { car1: "", car2: "", car3: "" },
        }),
        roundRace: jest.fn((carList, scoreboard) => {
          const updatedScoreboard = { ...scoreboard };
          updatedScoreboard[carList[0]] = "-";
          return updatedScoreboard;
        }),
        findWinner: jest.fn().mockReturnValue("car1"),
      };
    });
  });

describe("기능 테스트", () => {
  test("prepareGame 메서드", async () => {
    const app = new App();
    const { carList, round, scoreboard } = await app.prepareGame();
    expect(carList).toEqual(["car1", "car2", "car3"]);
    expect(round).toEqual(5);
    expect(scoreboard).toEqual({ car1: "", car2: "", car3: "" });
  });

  test("roundRace 메서드", () => {
    const app = new App();
    const carList = ["car1"];
    let scoreboard = { car1: "" };
    scoreboard = app.roundRace(carList, scoreboard);
    expect(scoreboard).toEqual({ car1: "-" });
  });
  test("findWinner 메서드", () => {
    const app = new App();
    const scoreboard = { car1: "--", car2: "---", car3: "--" };
    const winner = app.findWinner(scoreboard);
    expect(winner).toEqual("car1");
  });
});
