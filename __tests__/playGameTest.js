import playGame from "../src/playGame";
import getRandomNumber from "../src/getRandomNumber";

jest.mock("../src/getRandomNumber"); // getRandomNumber를 모킹합니다.

describe("playGame", () => {
  test("랜덤 숫자 4,3 주기", () => {
    getRandomNumber.mockReturnValueOnce(4).mockReturnValueOnce(3);

    const player = {
      car1: "",
      car2: "",
    };

    playGame(player);

    expect(player["car1"]).toBe("-");
    expect(player["car2"]).toBe("");
  });

  test("랜덤 숫자 3만 주기", () => {
    getRandomNumber.mockReturnValue(3); // getRandomNumber가 항상 3을 반환하도록 설정

    const player = {
      car1: "",
      car2: "",
    };

    playGame(player);

    expect(player["car1"]).toBe("");
    expect(player["car2"]).toBe("");
  });
});
