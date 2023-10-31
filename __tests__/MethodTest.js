import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/ViewResult.js";
import App from "../src/App.js";

describe("App 클래스 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.spyOn(MissionUtils.Console, 'readLineAsync').mockImplementation((text) => {
      if (text.includes('자동차 이름')) return Promise.resolve('Car1,Car2');
      if (text.includes('횟수')) return Promise.resolve('5');
    });
    jest.spyOn(MissionUtils.Console, 'print');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("getInput 메소드가 cars와 rounds를 올바르게 설정하는지 확인", async () => {
    await app.play();

    expect(app.model.cars.length).toBe(2);
    expect(app.model.rounds).toBe(5);
  });

  test("validateCarNames 메소드가 유효하지 않은 자동차 이름에 대해 예외를 던지는지 확인", () => {
    const invalidCar = new Car("InvalidName");

    invalidCar.isValidName = jest.fn().mockReturnValue(false);

    app.model.cars.push(invalidCar);

    expect(() => app.model.validateCarNames()).toThrow(Error);
  });

  test("playRound 메소드가 각 자동차의 move 메소드를 호출하는지 확인", () => {
    const 이재신 = new Car("이재신");
    const 우테코 = new Car("우테코");

    jest.spyOn(이재신, 'move');
    jest.spyOn(우테코, 'move');

    app.model.cars.push(이재신, 우테코);

    app.model.playRound();

    expect(이재신.move).toHaveBeenCalled();

    let 이재신MoveCalled = 이재신.move.mock.calls.length > 0;
    let 우테코MoveCalled = 우테코.move.mock.calls.length > 0;

    console.log(`이재신의 move 메소드가 호출되었는가? : ${이재신MoveCalled}`);
    console.log(`우테코의 move 메소드가 호출되었는가? : ${우테코MoveCalled}`);

    expect(이재신.move).toHaveBeenCalled();
    expect(우테코.move).toHaveBeenCalled();
  });
});
