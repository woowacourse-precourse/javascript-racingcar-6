import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import * as F from "../src/utility/utilityFunctions.js";

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

function double(x) {
  return x * 2;
}

function isEven(x) {
  return x % 2 === 0;
}

function add(x, y) {
  return x + y;
}

const sampleArray = [1, 2, 3, 4, 5];

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
    },
  );
});

describe("map 함수", () => {
  it("배열의 모든 요소에 함수를 적용하여 새로운 배열을 반환한다.", () => {
    const result = F.map(double, sampleArray);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe("filter 함수", () => {
  it("조건을 만족하는 요소로 이루어진 배열을 반환한다.", () => {
    const result = F.filter(isEven, sampleArray);
    expect(result).toEqual([2, 4]);
  });
});

describe("reduce 함수", () => {
  it("배열의 요소를 축약하여 결과를 반환한다.", () => {
    const result = F.reduce(add, 0, sampleArray);
    expect(result).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  it("초깃값을 제공하지 않으면 배열의 첫 번째 요소를 초기값으로 사용한다.", () => {
    const result = F.reduce(add, sampleArray);
    expect(result).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });
});
