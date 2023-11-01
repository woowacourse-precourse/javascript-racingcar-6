import InputError from "../src/errors/InputError.js";
import { ERROR_MSG } from "../src/constants/Constants.js";

describe("InputError 테스트", () => {
  test("InputError 생성", () => {
    const error = new InputError(ERROR_MSG.EMPTY_CAR_NAME);
    expect(error.message).toBe(ERROR_MSG.EMPTY_CAR_NAME);
    expect(error.name).toBe("InputError");
  });
});
