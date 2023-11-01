import App from "../src/App.js";
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

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]], [["pobi,anna,eastjun"]]])(
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

  test.each([
    [["car1/car2/car3"]],
    [["car1.car2.car3"]],
    [["car1 car2 car3"]],
    [["car1;car2;car3"]],
    [["car1,car2 car3"]],
    [[""]],
  ])("올바르지 않은 입력 테스트", async (inputs) => {
    // given
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [["car1,car2,car3"]],
    [["car1, car2, car3"]],
    [["car1 , car2 , car3"]],
    [["car1 ,car2 , car3 "]],
  ])("자동차 쉼표(,) 구분 테스트", async (inputs) => {
    const expectCarName = ["car1", "car2", "car3"];

    mockQuestions(inputs);

    const app = new App();
    const cars = await app.initializeCars();

    expect(cars).toEqual(expectCarName);
  });

  test("setCars 함수 테스트", async () => {
    const input = ["anna", "joy", "yeri", "kemi"];

    const app = new App();
    const cars = app.setCars(input);

    await expect(cars).toHaveLength(input.length);

    cars.forEach((car, index) => {
      expect(car.name).toBe(input[index]);
    });
  });

  test("중복된 자동차 이름 테스트", async () => {
    const input = ["car1, car2, car1"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
