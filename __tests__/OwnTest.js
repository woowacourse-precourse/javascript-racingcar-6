import App from "../src/App.js";

describe("경기 기록", () => {
  test("자동차 경주 기록 보드 세팅", () => {
    // given
    const carsRecordBoard = {};
    const inputs = ["oms", "omin", "sbk"];
    const outputs = {
      oms: "",
      omin: "",
      sbk: "",
    };

    // when
    const app = new App();
    app.setCarsRecordBoard(inputs, carsRecordBoard);

    //then
    expect(carsRecordBoard).toEqual(outputs);
  });

  test("최종 우승자 기록", () => {
    // given
    const carsRecordBoard = {
      oms: "--",
      omin: "---",
      sbk: "--",
    };
    const inputs = ["oms", "omin", "sbk"];
    const winner = [];
    const output = ["omin"];

    // when
    const app = new App();
    app.findWinner(inputs, carsRecordBoard, winner);

    // then
    expect(winner).toEqual(output);
  });
});
