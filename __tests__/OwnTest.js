import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
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

describe("경기 진행 정도에 따른 결과 출력 확인하기", () => {
  test("최종 우승자 출력", () => {
    // given
    const WINNER_MESSAGE = "최종 우승자 : ";
    const inputs = [["omin"], ["oms", "omin"]];
    const outputs = [[`${WINNER_MESSAGE}omin`], [`${WINNER_MESSAGE}oms, omin`]];
    const logSpy = getLogSpy();

    // when
    const app = new App();

    inputs.forEach((input) => {
      app.printFinalResult(input);

      const output = outputs.shift().toString();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("중간 결과 출력", () => {
    //given
    const cars = ["omin", "oms", "sbk"];
    const carsRecordBoard = {
      omin: "--",
      oms: "-",
      sbk: "----",
    };
    const outputs = ["omin : --", "oms : -", "sbk : ---"];
    const logSpy = getLogSpy();

    // when
    const app = new App();

    cars.forEach((car) => {
      app.printCurrentResult(car, carsRecordBoard);

      const output = outputs.shift();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("자동차 동작", () => {
  test("이동 및 정지", () => {
    // given
    const car = "oms";
    const carsRecordBoard = { oms: "" };
    const CAN_MOVE = 4;
    const STOP = 3;
    const flags = [CAN_MOVE, STOP];
    const outputs = ["-", ""];

    // when
    const app = new App();

    flags.forEach((flag) => {
      carsRecordBoard[car] = "";
      app.moveCar(car, carsRecordBoard, app.checkCanMove(flag));

      const output = outputs.shift();

      // then
      expect(carsRecordBoard[car]).toEqual(output);
    });
  });
});

describe("사용자의 입력값 예외처리 확인하기", () => {
  test("자동차 이름", () => {
    // given
    const inputs = ["oomsss,omin", "oms,,omin", "o ms,omin", "omsomin"];
    const MODE = "carName";

    // when
    const app = new App();

    // then
    inputs.forEach((input) => {
      expect(() => {
        app.validation(MODE, input);
      }).toThrow("[ERROR]");
    });
  });

  test("이동 횟수", async () => {
    // given
    const inputs = [".1", "1 2", "1.2", "0", "asd", "#3"];
    const MODE = "lapTime";

    // when
    const app = new App();

    // then
    inputs.forEach((input) => {
      expect(() => {
        app.validation(MODE, input);
      }).toThrow("[ERROR]");
    });
  });
});
