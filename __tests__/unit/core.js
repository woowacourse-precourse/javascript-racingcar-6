import View from "../../src/core/View.js";
import Observer from "../../src/core/Observer.js";
import CustomError from "../../src/core/CustomError.js";
import InputValidate from "../../src/core/InputValidate.js";

import { ERROR_MESSAGE } from "../../src/utils/constants.js";

const { INVALID_TRY_COUNT, DUPLICATED_CAR_NAME, EMPTY_INPUT, INVALID_CAR_NAME } = ERROR_MESSAGE;

describe("class InputValidate", () => {
  test("checkCarNames - 입력된 값이 없을 경우", () => {
    // given
    const carNames = [];

    // when
    const checkCarNames = () => {
      InputValidate.checkCarNames(carNames);
    };

    // then
    expect(checkCarNames).toThrow(EMPTY_INPUT);
  });

  test("checkCarNames - 입력된 자동차 이름의 길이가 1보다 작거나 5보다 클경우", () => {
    // given
    const carNames = ["pobi", "woni", "junqwe"];

    // when
    const checkCarNames = () => {
      InputValidate.checkCarNames(carNames);
    };

    // then
    expect(checkCarNames).toThrow(INVALID_CAR_NAME);
  });

  test("checkCarNames - 중복된 자동차 이름", () => {
    // given
    const carNames = ["pobi", "woni", "pobi"];

    // when
    const checkCarNames = () => {
      InputValidate.checkCarNames(carNames);
    };

    // then
    expect(checkCarNames).toThrow(DUPLICATED_CAR_NAME);
  });

  test("checkTryCount - 숫자가 아닐 경우", () => {
    // given
    const tryCount = "test";

    // when
    const checkTryCount = () => {
      InputValidate.checkTryCount(tryCount);
    };

    // then
    expect(checkTryCount).toThrow(INVALID_TRY_COUNT);
  });

  test("checkTryCount - 1보다 작을 경우", () => {
    // given
    const tryCount = 0;

    // when
    const checkTryCount = () => {
      InputValidate.checkTryCount(tryCount);
    };

    // then
    expect(checkTryCount).toThrow(INVALID_TRY_COUNT);
  });
});

describe("class CustomError", () => {
  test("CustomError 클래스로 에러 발생", () => {
    // given
    const errorMessage = "에러 메시지";

    // when
    const throwErrorMessage = () => {
      throw new CustomError(errorMessage);
    };

    // then
    expect(throwErrorMessage).toThrow(errorMessage);
  });
});

describe("class Observer", () => {
  const KEY = "key";
  const DATA = { test: "test" };

  test("데이터 설정후 호출", () => {
    // given
    const observer = new Observer();

    // when
    observer.init(KEY, DATA);

    // then
    expect(observer.get(KEY)).toBe(DATA);
  });

  test("구독후 데이터 변경", () => {
    // given
    const observer = new Observer();
    const newData = { test: "test2" };
    const callback = jest.fn();

    // when
    observer.init(KEY, DATA);
    observer.subscribe(KEY, callback);
    observer.set(KEY, newData);

    // then
    expect(callback).toHaveBeenCalled();
    expect(observer.get(KEY)).toBe(newData);
  });
});

describe("class View", () => {
  const subscribe = jest.fn();
  const MockModel = jest.fn().mockImplementation(() => {
    return { name: "test", subscribe };
  });

  beforeEach(() => {
    MockModel.mockClear();
    subscribe.mockClear();
  });

  test("생성자 호출시 subscribe 메서드 호출", () => {
    // given
    const model = new MockModel();

    // when
    new View({ model });

    // then
    expect(subscribe).toHaveBeenCalled();
    expect(subscribe).toHaveBeenCalledWith(model.name, expect.any(Function));
  });

  test("print 메서드를 구현하지 않았을 경우", () => {
    // given
    const model = new MockModel();
    const view = new View({ model });

    // when
    const print = () => {
      view.print();
    };

    // then
    expect(print).toThrow("print 메서드를 구현해야 합니다.");
  });

  test("print 메서드를 구현했을 경우", () => {
    // given
    const model = new MockModel();
    const view = new View({ model });
    view.print = jest.fn();

    // when
    view.print();

    // then
    expect(view.print).toHaveBeenCalled();
  });
});