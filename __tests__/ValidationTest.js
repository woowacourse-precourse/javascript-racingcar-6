import { Random } from "@woowacourse/mission-utils";
import { Validation } from "../src/Validation";
import { MESSAGES } from "../src/constant/message";

describe("Validation 객체 테스트", () => {
  describe("validateGoForward 메서드 테스트", () => {
    const { validateGoForward } = Validation;

    test("validateGoForward 메서드는 랜덤하게 생성된 숫자가 4보다 크거나 같으면 true를 반환해야 한다.", () => {
      // given
      jest.spyOn(Random, "pickNumberInRange").mockReturnValue(9);

      // when
      const validatedValue = validateGoForward();

      // then
      expect(validatedValue).toEqual(true);
    });

    test("validateGoForward 메서드는 랜덤하게 생성된 숫자가 4보다 작으면 false를 반환해야 한다.", () => {
      // given
      jest.spyOn(Random, "pickNumberInRange").mockReturnValue(3);

      // when
      const validatedValue = validateGoForward();

      // then
      expect(validatedValue).toEqual(false);
    });
  });

  describe("validateRacingCarName 메서드 테스트", () => {
    const { validateRacingCarName } = Validation;
    const {
      ERROR_NO_INPUT,
      ERROR_RACING_CAR_NAMES_WHITESPACE,
      ERROR_RACING_CAR_NAMES_LENGTH,
    } = MESSAGES;

    test("validateRacingCarName 메서드에 빈 값을 입력하면 ERROR_NO_INPUT 에러가 발생해야 한다.", () => {
      expect(() => validateRacingCarName("")).toThrowError(ERROR_NO_INPUT);
    });

    test("validateRacingCarName 메서드에 공백이 포함된 값을 입력하면 ERROR_RACING_CAR_NAMES_WHITESPACE 에러가 발생해야 한다.", () => {
      expect(() => validateRacingCarName(" ")).toThrowError(
        ERROR_RACING_CAR_NAMES_WHITESPACE
      );
    });

    test("validateRacingCarName 메서드에 크기가 5 초과되는 값을 입력하면 ERROR_RACING_CAR_NAMES_LENGTH 에러가 발생해야 한다.", () => {
      expect(() => validateRacingCarName("stringLengthMoreThan5")).toThrowError(
        ERROR_RACING_CAR_NAMES_LENGTH
      );
    });

    test("validateRacingCarName 메서드에 올바른 값을 입력하면 ','로 스플릿된 문자열 배열이 반환되어야 한다.", () => {
      const input = "car1,car2,car3,car4,car5";
      const output = ["car1", "car2", "car3", "car4", "car5"];

      expect(validateRacingCarName(input)).toEqual(output);
    });
  });

  describe("validateRacingRepeatNumber 메서드 테스트", () => {
    const { validateRacingRepeatNumber } = Validation;
    const {
      ERROR_NO_INPUT,
      ERROR_PLAY_REPEAT_NUMBER_TYPE,
      ERROR_PLAY_REPEAT_NUMBER_SIZE,
    } = MESSAGES;

    test("validateRacingRepeatNumber 메서드에 빈 값을 입력하면 ERROR_NO_INPUT 에러가 발생해야 한다.", () => {
      expect(() => validateRacingRepeatNumber("")).toThrowError(ERROR_NO_INPUT);
    });

    test("validateRacingRepeatNumber 메서드에 숫자가 아닌 값을 입력하면 ERROR_PLAY_REPEAT_NUMBER_TYPE 에러가 발생해야 한다.", () => {
      expect(() => validateRacingRepeatNumber("1c5")).toThrowError(
        ERROR_PLAY_REPEAT_NUMBER_TYPE
      );
    });

    test("validateRacingRepeatNumber 메서드에 양의 자연수가 아닌 값을 입력하면 ERROR_PLAY_REPEAT_NUMBER_SIZE 에러가 발생해야 한다.", () => {
      expect(() => validateRacingRepeatNumber("1.532")).toThrowError(
        ERROR_PLAY_REPEAT_NUMBER_SIZE
      );
    });

    test("validateRacingRepeatNumber 메서드에 올바른 값을 입력하면 숫자형으로 변환된 값이 반환되어야 한다.", () => {
      const input = "4";
      const output = 4;

      expect(validateRacingRepeatNumber(input)).toEqual(output);
    });
  });
});
