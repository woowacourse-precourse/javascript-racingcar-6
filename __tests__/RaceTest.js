import RacingGame from "../src/racingGame";
import Car from "../src/Car/car";
import CarRacing from "../src/Process/carRacing";
import FindWinner from "../src/Process/findWinner";
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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("자동차 경주 출력 테스트", () => {
  test("자동차가 이동한 결과 출력", () => {
    //given
    const inputList = [new Car("kim", 0), new Car("park", 0)];
    const randomNum = [3, 4];
    const logSpy = getLogSpy();

    mockQuestions(inputList);
    mockRandoms([...randomNum]);

    //when
    CarRacing(inputList);

    //then
    expect(logSpy).toHaveBeenCalledWith("kim : ");
    expect(logSpy).toHaveBeenCalledWith("park : -");
  });

  test("우승자가 여러 명이면, 쉼표를 통해 출력", async () => {
    //given
    const tryNumber = 1;
    const inputList = [new Car("kim", 0), new Car("park", 0), new Car("lee", 0)];
    const randomNum = [3, 4, 4];
    const logSpy = getLogSpy();
    const Racing = new RacingGame();

    mockQuestions(inputList);
    mockRandoms([...randomNum]);

    //when
    await Racing.racing({ gameTryCount: tryNumber, carList: inputList });

    //then
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : park, lee");
  });
});
