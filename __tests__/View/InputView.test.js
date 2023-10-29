import InputView from "../../src/View/InputView";
import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../../src/constants/message";

MissionUtils.Console.readLineAsync = jest.fn();

describe("InputView 클래스 테스트", () => {
  test("getCarNameInput 메서드를 가지고 있어야 한다.", () => {
    expect(typeof InputView.getCarNameInput).toBe("function");
  });

  test("getCarNameInput 메서드가 호출되면 MissionUtils.Console.readLineAsync가 호출되어야 한다.", async () => {
    await InputView.getCarNameInput();
    expect(MissionUtils.Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.carName);
  });

  test("getCarNameInput 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
    const carNameInput = "pobi,woni,jun";
    const carNameInputList = ["pobi", "woni", "jun"];
    const resolvedPromise = Promise.resolve(carNameInput);
    MissionUtils.Console.readLineAsync.mockReturnValue(resolvedPromise);
    const carName = await InputView.getCarNameInput();
    expect(carName).toStrictEqual(carNameInputList);
  });

  test("getRaceCountInput 메서드를 가지고 있어야 한다.", () => {
    expect(typeof InputView.getRaceCountInput).toBe("function");
  });

  test("getRaceCountInput 메서드가 호출되면 MissionUtils.Console.readLineAsync가 호출되어야 한다.", async () => {
    await InputView.getRaceCountInput();
    expect(MissionUtils.Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.raceCount);
  });

  test("getRaceCountInput 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
    const raceCountInput = "5";
    const raceCountInputNumber = 5;
    const resolvedPromise = Promise.resolve(raceCountInput);
    MissionUtils.Console.readLineAsync.mockReturnValue(resolvedPromise);
    const raceCount = await InputView.getRaceCountInput();
    expect(raceCount).toBe(raceCountInputNumber);
  });
});
