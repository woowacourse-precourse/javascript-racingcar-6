import InputValidator from '../src/utils/InputValidator.js';
import { ErrorMessages } from '../src/utils/constants.js';

describe("자동차 이름 입력 테스트", () => {
  test("자동차 이름이 빈 배열일 때, 에러를 출력해야 한다", async () => {
    // given
    const carsName = [""];

    // when & then
    expect(() => {
      InputValidator.validateRaceCarNameInput(carsName);
    }).toThrow(ErrorMessages.EMPTY_INPUT);
  });

  test("자동차 이름에 중복된 값이 있을 때, 에러를 출력해야 한다", async () => {
    // given
    const carsName = ["car1", "car2", "car1"];

    // when & then
    expect(() => {
      InputValidator.validateRaceCarNameInput(carsName);
    }).toThrow(ErrorMessages.DUPLICATE_CAR_NAME);
  });

  test("자동차들 이름 중 길이가 5를 초과하게 될 때, 에러를 출력해야 한다.", async () => {
    // given
    const carsName = ["carApple", "car2", "car1"];

    // when & then
    expect(() => {
      InputValidator.validateRaceCarNameInput(carsName);
    }).toThrow(ErrorMessages.CAR_NAME_LENGTH_EXCEEDED);
  });
})