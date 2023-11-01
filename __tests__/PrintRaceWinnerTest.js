import GameResult from "../src/game/GameResult";
import IOManager from "../src/utils/IOManager";

jest.mock("../src/utils/IOManager");

describe("자동차 경주 게임 최종 우승자 출력 테스트", () => {
  let gameResult;
  let ioManager;

  beforeEach(() => { 
    gameResult = new GameResult();
    ioManager = new IOManager();
    gameResult.ioManager = ioManager;
  });

  test("최종 우승자가 한 명일 때, 정상적으로 출력해야 한다", () => {
    // given
    const carsName = ["car1", "car2", "car3"];
    const carsPosition = [1, 2, 3];
    const winnerName = ["car3"];

    // when
    gameResult.calculateWinner(carsName, carsPosition);

    // then
    expect(ioManager.printWinner).toHaveBeenCalledWith(winnerName);
  });

  test("최종 우승자가 여러명일 때, 정상적으로 출력해야 한다", () => {
    // given
    const carsName = ["car1", "car2", "car3"];
    const carsPosition = [3, 3, 3];
    const winnerNames = ["car1", "car2", "car3"];

    // when
    gameResult.calculateWinner(carsName, carsPosition);

    // then
    expect(ioManager.printWinner).toHaveBeenCalledWith(winnerNames);
  });
});
