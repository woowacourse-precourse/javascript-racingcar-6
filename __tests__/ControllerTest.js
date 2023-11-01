import { MissionUtils } from "@woowacourse/mission-utils";
import RaceController from "../src/controller/RaceController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
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
