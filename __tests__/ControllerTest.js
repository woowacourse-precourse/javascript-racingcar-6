import { MissionUtils } from "@woowacourse/mission-utils";
import RaceController from "../src/controller/RaceController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("경주 조건 입력: 자동차 이름", () => {
  test("이름 입력 받기", async () => {
    const inputs = ["kim,hee,seo"];
    mockQuestions(inputs);

    const controller = new RaceController();
    await controller.getCarNames();

    expect(controller.carNames).toEqual(["kim", "hee", "seo"]);
  });

  test.each([[["kim,heeseo"]], [["woowa,course"]]])(
    "이름에 대한 예외 처리 - 5자 이상",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const controller = new RaceController();

      // then
      await expect(controller.getCarNames()).rejects.toThrow("[ERROR]");
    }
  );

  test.each([[["kim,kim"]], [["hee,hee"]]])(
    "이름에 대한 예외 처리 - 중복",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const controller = new RaceController();

      // then
      await expect(controller.getCarNames()).rejects.toThrow("[ERROR]");
    }
  );
});

describe("경주 조건 입력: 시도 횟수", () => {
  test("시도 횟수 입력 받기", async () => {
    const inputs = [3];
    mockQuestions(inputs);

    const controller = new RaceController();
    await controller.getNumOfTry();

    expect(controller.numOfTry).toEqual(3);
  });

  test.each([0, -1, "%"])(
    "시도횟수에 대한 예외 처리 - 양의 정수 아님",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const controller = new RaceController();

      // then
      await expect(controller.getNumOfTry()).rejects.toThrow("[ERROR]");
    }
  );
});

describe("전진 실행 및 결과 출력", () => {
  test("전진 실행 - 한 단계", async () => {
    const randoms = [9, 8, 1];
    mockRandoms([...randoms]);

    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 0,
      },
      {
        name: "hee",
        point: 0,
      },
      {
        name: "seo",
        point: 0,
      },
    ];
    controller.getPoints();

    expect(controller.cars).toEqual([
      {
        name: "kim",
        point: 1,
      },
      {
        name: "hee",
        point: 1,
      },
      {
        name: "seo",
        point: 0,
      },
    ]);
  });

  test("전진 실행", async () => {
    const randoms = [4, 5, 6, 3, 4, 5, 1, 2, 9];
    mockRandoms([...randoms]);

    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 0,
      },
      {
        name: "hee",
        point: 0,
      },
      {
        name: "seo",
        point: 0,
      },
    ];
    controller.numOfTry = 3;
    controller.moveForward();

    expect(controller.cars).toEqual([
      {
        name: "kim",
        point: 1,
      },
      {
        name: "hee",
        point: 2,
      },
      {
        name: "seo",
        point: 3,
      },
    ]);
  });

  test("전진 결과 출력 - 한 단계", async () => {
    const randoms = [9, 8, 1];
    const outputs = ["kim : -\nhee : -\nseo : "];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 0,
      },
      {
        name: "hee",
        point: 0,
      },
      {
        name: "seo",
        point: 0,
      },
    ];
    controller.getPoints();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("전진 결과 출력", async () => {
    const randoms = [4, 5, 6, 3, 4, 5, 1, 2, 9];
    const outputs = [
      "kim : -\nhee : -\nseo : -",
      "kim : -\nhee : --\nseo : --",
      "kim : -\nhee : --\nseo : ---",
    ];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 0,
      },
      {
        name: "hee",
        point: 0,
      },
      {
        name: "seo",
        point: 0,
      },
    ];
    controller.numOfTry = 3;
    controller.moveForward();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("경주 완료 출력", () => {
  test("우승자 선별, 출력", async () => {
    const outputs = ["최종 우승자 : hee"];
    const logSpy = getLogSpy();
    
    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 1,
      },
      {
        name: "hee",
        point: 3,
      },
      {
        name: "seo",
        point: 2,
      },
    ];
    controller.getWinners();

    expect(controller.winners).toEqual(["hee"]);
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining([output]));
    });
  });

  test("우승자 선별 - 공동", async () => {
    const outputs = ["최종 우승자 : hee, seo"];
    const logSpy = getLogSpy();

    const controller = new RaceController();
    controller.cars = [
      {
        name: "kim",
        point: 1,
      },
      {
        name: "hee",
        point: 3,
      },
      {
        name: "seo",
        point: 3,
      },
    ];
    controller.getWinners();

    expect(controller.winners).toEqual(["hee", "seo"]);
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });  
});
