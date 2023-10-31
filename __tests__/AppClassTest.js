import App from "../src/App.js";
import { Car } from "../src/Car.js";
import { Console } from "@woowacourse/mission-utils";
import { Validation } from "../src/Validation.js";

describe("App 클래스 테스트", () => {
  let app;
  let log;
  let readLineAsyncMockFn;
  let validationMockFn;
  let racingCarsInput;

  beforeEach(() => {
    app = new App();
    log = jest.spyOn(Console, "print");
    readLineAsyncMockFn = jest.spyOn(Console, "readLineAsync");
    validationMockFn = jest.spyOn(Validation, "validateGoForward");
    racingCarsInput = "car1,car2,car3,car4";
  });

  test("App 클래스 생성자 - app 인스턴스를 생성할 수 있다.", () => {
    expect(app).toBeInstanceOf(App);
    expect(app.racingCars).toEqual([]);
    expect(app.racingRepeatNumber).toEqual(0);
  });

  test("registerRacingCars 메서드 - racingCars 멤버 변수에 Car 인스턴스의 리스트를 할당할 수 있다.", async () => {
    // given
    const racingCarInstanceList = racingCarsInput
      .split(",")
      .map((input) => new Car(input));

    readLineAsyncMockFn.mockResolvedValue(racingCarsInput);

    // when
    await app.registerRacingCars();

    // then
    expect(app.racingCars).toEqual(racingCarInstanceList);
  });

  test("registerRacingRepeatNumber 메서드 - racingRepeatNumber 멤버 변수에 반복 횟수를 할당할 수 있다.", async () => {
    // given
    const racingRepeatNumberInput = "5";
    const racingReapeatNumberOutput = 5;

    readLineAsyncMockFn.mockResolvedValue(racingRepeatNumberInput);

    // when
    await app.registerRacingRepeatNumber();

    // then
    expect(app.racingRepeatNumber).toEqual(racingReapeatNumberOutput);
  });

  test("racing 메서드 - 레이싱 경기를 1회 진행하여 1회차 결과를 콘솔에 보여줄 수 있다.", () => {
    // given
    const goForwardValidatedValue = [false, true, false, true];
    const outputs = ["car1 : ", "car2 : -", "car3 : ", "car4 : -"];
    const racingCarInstanceList = racingCarsInput
      .split(",")
      .map((input) => new Car(input));

    app.racingCars = racingCarInstanceList;

    goForwardValidatedValue.forEach((value) => {
      validationMockFn.mockReturnValueOnce(value);
    });

    // when
    app.racing();

    // then
    expect(log).toHaveBeenCalledTimes(4);
    outputs.forEach((output) => {
      expect(log).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("releaseWinner 메서드 - 레이싱 우승자를 발표할 수 있다. 동점자 모두가 문자열로 반환된다.", () => {
    // given
    const moveCountList = [4, 5, 2, 5];
    const racersList = racingCarsInput.split(",").map((racer, index) => {
      const instance = new Car(racer);
      instance.moveCount = moveCountList[index];

      return instance;
    });

    app.racingCars = racersList;

    // when
    app.releaseWinner();

    // then
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : car2, car4")
    );
  });
});
