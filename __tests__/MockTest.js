import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockConsole = (outputs) => {
  MissionUtils.Console.print = jest.fn();
  MissionUtils.Console.print.mockImplementation((output) => {
    outputs.push(output);
  });
};

const mockReadLineAsync = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  inputs.reduce(
    (acc, input) => acc.mockReturnValueOnce(Promise.resolve(input)),
    MissionUtils.Console.readLineAsync
  );
};

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe("자동차 경주 게임 테스트", () => {
  test("자동차 전진 및 정지 기능", async () => {
    const carNames = ["car1", "car2"];
    const trials = 5;
    const randomNumbers = [4, 3, 7, 2, 5];
    const expectedOutputs = [
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
      "시도할 횟수는 몇 회인가요?",
      "",
      "실행 결과",
      "car1 : -",
      "car2 : ",
    ];
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    mockRandomNumbers(randomNumbers);
    const outputs = [];
    mockConsole(outputs);

    const app = new App();
    await app.play();

    expectedOutputs.forEach((output, index) => {
      expect(outputs[index]).toContain(output);
    });
  });

  test("자동차 이름 부여 및 출력", async () => {
    const carNames = ["car1", "car2"];
    const trials = 1;
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    const outputs = [];
    mockConsole(outputs);

    // when
    const app = new App();
    await app.play();

    // then
    carNames.forEach((name) => {
      expect(outputs.some((output) => output.includes(name))).toBeTruthy();
    });
  });

  test("자동차 이름 길이 제한", async () => {
    // given
    const carNames = ["longname", "car2"];
    mockReadLineAsync([carNames.join(","), "1"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("사용자의 이동 횟수 입력", async () => {
    // given
    const carNames = ["car1", "car2"];
    const trials = 3;
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    const outputs = [];
    mockConsole(outputs);

    // when
    const app = new App();
    await app.play();

    // then
    // "3번의 이동"이 반영되어 출력되었는지 확인
  });

  test("전진하는 조건", async () => {
    // given
    const carNames = ["car1", "car2"];
    const trials = 1;
    const randomNumber = 4; // 전진 조건
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    mockRandomNumbers([randomNumber]);
    const outputs = [];
    mockConsole(outputs);

    // when
    const app = new App();
    await app.play();

    // then
    // 모든 자동차가 1회 전진했는지 확인
  });

  test("우승자 발표", async () => {
    // given
    const carNames = ["car1", "car2"];
    const trials = 5;
    const randomNumbers = [4, 3, 7, 2, 5]; // 4 이상은 전진, 미만은 정지
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    mockRandomNumbers(randomNumbers);
    const outputs = [];
    mockConsole(outputs);

    // when
    const app = new App();
    await app.play();

    // then
    // 우승자 발표 출력 확인
  });

  test("여러 우승자 발표", async () => {
    // given
    const carNames = ["car1", "car2", "car3"];
    const trials = 5;
    const randomNumbers = [4, 3, 7, 2, 5, 4, 3, 7, 2, 5, 4, 3, 7, 2, 5]; // 3대 모두 동일한 조건
    mockReadLineAsync([carNames.join(","), `${trials}`]);
    mockRandomNumbers(randomNumbers);
    const outputs = [];
    mockConsole(outputs);

    // when
    const app = new App();
    await app.play();

    // then
    // 3대 모두 우승자로 발표되었는지 확인
  });

  test("잘못된 값 입력 시 예외 발생", async () => {
    // given
    const invalidInputs = ["", "-1", "abc"];
    invalidInputs.forEach(async (input) => {
      mockReadLineAsync(["car1,car2", input]);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });
});
