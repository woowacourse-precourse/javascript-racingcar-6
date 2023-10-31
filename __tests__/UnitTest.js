import { MissionUtils } from "@woowacourse/mission-utils";
import Controllers from "../src/Controllers/index.js";
import Model from "../src/Models/index.js";

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

describe("자동차 이름 입력", () => {
  const controllers = new Controllers();

  test("정상적인 값 입력 시", async () => {
    const input = ["woon,toon"];
    const answer = ["woon", "toon"];
    mockQuestions(input);

    // when
    const result = await controllers.getUserInput(...input);

    // then
    expect(result).toEqual(answer);
  });

  test("빈 공백 입력 시 예외처리", async () => {
    const input = [""];

    mockQuestions(input);

    // when
    const result = controllers.getUserInput(...input);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });

  test("중복된 값이 있을 시 예외처리", async () => {
    const input = ["song,song,kay"];

    mockQuestions(input);

    // when
    const result = controllers.getUserInput(...input);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

describe("게임 시도 횟수 입력", () => {
  test("정상적인 값 입력 시", async () => {
    const input = ["5"];
    const answer = [...input];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = await controllers.getTryTimes();

    //then
    expect(result).toEqual(answer);
  });

  test("숫자가 아닌 값을 입력 시", async () => {
    const input = ["XX"];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = controllers.getTryTimes();

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

describe("시도횟수 만큼 반복한 각 자동차의 이동 거리 계산", () => {
  const model = new Model();
  const controllers = new Controllers();

  test("정상적으로 계산이 이루어졌을 때", async () => {
    const cars = ["caro", "cari"];
    const tryTime = 3;
    const answer = { cars, moveResult: { caro: 3, cari: 0 } };

    mockRandoms([5, 3, 5, 2, 6, 2]);

    model.removeWhitespace = jest.fn((carName) => carName);
    model.setInitialCarMovePoint = jest.fn(() => {
      return { caro: 0, cari: 0 };
    });
    controllers.repeatCarRacing = jest.fn(() => {
      return { caro: 3, cari: 0 };
    });

    //when
    const result = await controllers.carMoveCheck(cars, tryTime);

    //then
    expect(result).toEqual(answer);
  });

  test("자동차 이름이 5글자 이상일 시 예외처리", async () => {
    const cars = ["abcdef", "gghhf"];
    const tryTime = 1;

    //when
    const result = controllers.carMoveCheck(cars, tryTime);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });

  test("잘못된 형식의 이름을 입력 시 예외처리", async () => {
    const cars = ["l#uc", "@ㅡ@"];
    const tryTime = 1;

    //when
    const result = controllers.carMoveCheck(cars, tryTime);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

test("입력한 시도횟수 만큼 게임 반복", async () => {
  const model = new Model();
  const controllers = new Controllers();

  const cars = ["carl", "kay"];
  const tryTime = 3;
  const move = { carl: 0, kay: 0 };
  const answer = { carl: 3, kay: 3 };
  const logSpy = getLogSpy();

  mockRandoms([7, 7, 7, 7, 7, 7]);

  model.repeatMessage = jest.fn(() => {
    return "---";
  });

  //when
  const result = await controllers.repeatCarRacing(move, cars, tryTime);

  //then
  expect(result).toEqual(answer);
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("kay : ---"));
});

describe("우승자를 선택해서 출력", () => {
  const controller = new Controllers();

  test("우승자가 1명일 때", async () => {
    const cars = ["aaa", "bbb", "ccc"];
    const moveResult = { aaa: 3, bbb: 1, ccc: 1 };
    const data = { cars, moveResult };
    const logspy = getLogSpy();

    //when
    await controller.selectWinner(data);

    //then
    expect(logspy).toHaveBeenCalledWith(expect.stringContaining("aaa"));
  });

  test("우승자가 여러 명일 때", async () => {
    const cars = ["aaa", "bbb", "ccc", "ddd", "eee"];
    const moveResult = { aaa: 5, bbb: 5, ccc: 1, ddd: 1, eee: 5 };
    const data = { cars, moveResult };
    const logspy = getLogSpy();

    //when
    await controller.selectWinner(data);

    //then
    const expectItem = ["aaa", "bbb", "eee"];

    expectItem.forEach((str) => {
      expect(logspy).toHaveBeenCalledWith(expect.stringContaining(str));
    });
  });
});

describe("Model 기능 테스트", () => {
  const model = new Model();

  test("자동차 위치 초기값 설정", async () => {
    const cars = ["abc", "ccc", "ded"];
    const answer = { abc: 0, ccc: 0, ded: 0 };

    //when
    const result = model.setInitialCarMovePoint(cars);

    //then
    expect(result).toEqual(answer);
  });

  test("입력값 공백 제거", async () => {
    const cars = [" car ", "n e w"];
    const answer = ["car", "new"];

    cars.forEach((input, idx) => {
      //when
      const result = model.removeWhitespace(input);

      //then
      expect(result).toEqual(answer[idx]);
    });
  });

  test("자동차 움직인 거리 계산", async () => {
    const movePoint = { aaa: 0, bbb: 0, ccc: 0 };
    const random = [6, 2, 7];

    const answer = { aaa: 1, bbb: 0, ccc: 1 };

    mockRandoms(random);

    //when
    const result = model.calculateCarMovePoint(movePoint);

    //then
    await expect(result).toEqual(answer);
  });

  test("문자열 반복 생성", async () => {
    const string = "A";
    const times = 5;
    const answer = "AAAAA";

    //when
    const result = model.repeatMessage(string, times);

    //then
    await expect(result).toEqual(answer);
  });

  describe("가장 높은 점수를 가진 자동차 이름 반환", () => {
    test("가장 높은 점수가 중복되지 않을 경우", async () => {
      const cars = ["car1", "car2", "car3"];

      const moveResult = { car1: 3, car2: 1, car3: 5 };
      const answer = "car3";

      //when
      const result = model.getHighestMovePoint({ cars, moveResult });

      //then
      await expect(result).toEqual(answer);
    });

    test("가장 높은 점수가 중복 될 경우", async () => {
      const cars = ["car1", "car2", "car3"];

      const moveResult = { car1: 5, car2: 3, car3: 5 };
      const answer = "car1, car3";

      //when
      const result = model.getHighestMovePoint({ cars, moveResult });

      //then
      await expect(result).toEqual(answer);
    });
  });
});
