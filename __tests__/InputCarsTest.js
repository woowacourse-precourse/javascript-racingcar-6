import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputCars() 테스트", () => {
  test("정상 입력", async () => {
    mockQuestions(["pobi,gaza,오정환,사리"]);
    const app = new App();
    await app.inputCars();

    expect(app.cars.map((car) => car.getName())).toContain("pobi");
    expect(app.cars.map((car) => car.getName())).toContain("gaza");
    expect(app.cars.map((car) => car.getName())).toContain("오정환");
    expect(app.cars.map((car) => car.getName())).toContain("사리");
  });

  test("이름이 5자리가 넘어가는 경우", async () => {
    mockQuestions(["pobi,gabozago"]);
    const app = new App();

    await expect(app.inputCars()).rejects.toThrow("[ERROR]");
  });

  test("이름이 길이만 존재하는 공백인 경우", async () => {
    mockQuestions(["pobi,    ,gabozago"]);
    const app = new App();

    await expect(app.inputCars()).rejects.toThrow("[ERROR]");
  });

  test.each([[["pobi,,gabozago"]], [["gabozago,pobli,"]]])("이름의 길이가 0인 경우", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.inputCars()).rejects.toThrow("[ERROR]");
  });
});
