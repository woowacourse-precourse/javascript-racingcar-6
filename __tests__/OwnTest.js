import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

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

describe("사용자의 입력 값 가져오기", () => {
  test("자동차 이름 입력", async () => {
    // given
    const PURPOSE = "setCarsName";
    const inputs = ["oms,omin", "oms,sbk,omin"];
    const outputs = ["oms,omin", "oms,sbk,omin"];

    mockQuestions(inputs);

    const app = new App();

    outputs.forEach(async (output) => {
      // when
      const result = await app.getUserInput(PURPOSE);

      // then
      expect(result).toBe(output);
    });
  });

  test("이동 횟수 입력", async () => {
    // given
    const PURPOSE = "setLaps";
    const inputs = ["1", "3", "4", "7"];
    const outputs = ["1", "3", "4", "7"];

    mockQuestions(inputs);

    const app = new App();

    outputs.forEach(async (output) => {
      // when
      const result = await app.getUserInput(PURPOSE);

      // then
      expect(result).toBe(output);
    });
  });
});
