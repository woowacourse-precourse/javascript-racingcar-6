import App from "../src/App.js";

decribe("자동차 경주 게임", () => {
  const app = new App();
  test("차 이름 입력", () => {
    const input = "pobi,crong,honux";
    const result = app.validateNameInput(input);
    expect(result).toEqual("pobi,crong,honux");
  });
  test("시도 횟수 입력", () => {
    const input = 5;
    const result = app.validateTryCount(input);
    expect(result).toEqual(5);
  });
  test("우승자 출력 테스트", () => {
    const input = [
      { name: "pobi", position: 5 },
      { name: "crong", position: 4 },
      { name: "honux", position: 3 },
    ];
    const result = app.getWinners(input);
    expect(result).toEqual([{ name: "pobi", position: 5 }]);
  });
});
