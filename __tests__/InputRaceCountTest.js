import InputValidator from '../src/utils/InputValidator.js';
import { ErrorMessages } from '../src/utils/constants.js';

describe("자동차 경주 횟수 입력 테스트", () => {
  test("경주 횟수가 빈 문자열일 떄, 에러를 출력해야 한다", async () => {
    // given
    const raceCount = "";

    // when & then
    expect(() => {
      InputValidator.validateRaceCountInput(raceCount);
    }).toThrow(ErrorMessages.EMPTY_INPUT);
  });

  test("경주 횟수가 음수일 때, 에러를 출력해야 한다", async () => {
    // given
    const raceCount = -1;

    // when & then
    expect(() => {
      InputValidator.validateRaceCountInput(raceCount);
    }).toThrow(ErrorMessages.NEGATIVE_RACE_COUNT);
  });

  test("경주 횟수가 숫자가 아닐 때, 에러를 출력해야 한다", async () => {
    // given
    const raceCount = "race";

    // when & then
    expect(() => {
      InputValidator.validateRaceCountInput(raceCount);
    }).toThrow(ErrorMessages.INVALID_NUMBER_FORMAT);
  });
})