import App from "../src/App.js";
import Car from "../src/models/Car.js";
import GameController from "../src/controllers/GameController.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});

describe("Model - Car", () => {
  test("getCarModels() - 입력받은 문자열이 ','로 구분된 후 배열로 반환", async () => {
    // given
    const inputs = ["pobi,woni,jun"];
    const outputs = [["pobi", "woni", "jun"]];

    mockQuestions(inputs);

    // when
    const car = new Car();
    await car.getCarModelsArr();

    // then
    outputs.forEach((output) => {
      expect(car.carModelsArr).toEqual(output);
    });
  });

  describe("validateCarModels - 자동차 이름에 대한 예외 처리", () => {
    test("Case 1: 이름이 5글자를 초과하면 안됨", async () => {
      // given
      const inputs = ["pobi,potter"];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
    test("Case 2: 이름이 공백이면 안됨", async () => {
      // given
      const inputs = ["pobi, "];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
    test("Case 3: 이름이 중복이면 안됨", async () => {
      // given
      const inputs = ["pobi,pobi"];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });
});

describe("Model - Attempt", () => {
  test("getRaceAttempt() - 입력이 숫자여야 함", async () => {
    // given
    const inputs = ["pobi", "a"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("Controller", () => {
  test("getRandomValue() - 0~9 범위의 조건값 무작위로 생성 ", async () => {
    // given
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms([...numbers]);

    // when
    const controller = new GameController();
    const rand = controller.getRandomValue();

    // then
    expect(rand).toBeGreaterThanOrEqual(0);
    expect(rand).toBeLessThanOrEqual(9);
  });

  describe("getForwardCount() - ", () => {
    test("Case 1: 조건값이 4 이상일 경우 전진", async () => {
      // given
      const carModels = {
        pobi: { forwardCountArr: [] },
      };
      const numbers = [4, 5, 6, 7, 8, 9];
      mockRandoms([...numbers]);

      // when
      const controller = new GameController();
      const forwardCount = controller.getForwardCount(carModels, "pobi");

      // then
      expect(forwardCount).toEqual("-");
      expect(carModels.pobi.forwardCountArr).toEqual(["-"]);
    });

    test("Case 2: 조건값이 4 미만일 경우 제자리", async () => {
      // given
      const carModels = {
        pobi: { forwardCountArr: [] },
      };
      const numbers = [0, 1, 2, 3];
      mockRandoms([...numbers]);

      // when
      const controller = new GameController();
      const forwardCount = controller.getForwardCount(carModels, "pobi");

      // then
      expect(forwardCount).toEqual("");
      expect(carModels.pobi.forwardCountArr).toEqual([]);
    });
  });

  describe("printCarForward() - 각 자동차의 이름과 전진횟수 출력", () => {
    test("Case 1: 전진 시 출력 확인", async () => {
      // given
      const carModels = {
        pobi: { forwardCountArr: [] },
      };
      const output = "pobi : -";
      const logSpy = getLogSpy();
      mockRandoms([4]);

      // when
      const controller = new GameController();
      controller.printCarForward(carModels);

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    test("Case 2: 제자리일 시 출력 확인", async () => {
      // given
      const carModels = {
        pobi: { forwardCountArr: [] },
      };
      const output = "pobi : ";
      const logSpy = getLogSpy();
      mockRandoms([3]);

      // when
      const controller = new GameController();
      controller.printCarForward(carModels);

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("repeatRace() - 시도 횟수만큼 전진 시도", async () => {
    // given
    const carModels = {
      pobi: { forwardCountArr: [] },
    };
    const attempt = 3;
    const randoms = [5, 3, 8];
    const outputs = ["pobi : -", "\n", "pobi : -", "\n", "pobi : --"];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    // when
    const controller = new GameController();
    controller.repeatRace(carModels, attempt);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("printWinner() - 우승자들 이름 출력", async () => {
    // given
    const carModels = {
      pobi: { forwardCountArr: [] },
      woni: { forwardCountArr: [] },
      june: { forwardCountArr: [] },
    };
    const carModelsArr = ["pobi", "woni", "june"];
    const attempt = 3;
    const randoms = [5, 3, 8, 6, 4, 7, 9, 5, 7];
    const outputs = ["최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    // when
    const controller = new GameController();
    controller.repeatRace(carModels, attempt);
    controller.printWinner(carModels, carModelsArr);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
