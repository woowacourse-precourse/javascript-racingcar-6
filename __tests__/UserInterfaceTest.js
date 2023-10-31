import UserInterface from "../src/UserInterface";

describe("UserInterface 클래스 테스트", () => {
  describe("validateCarNames 함수", () => {
    test("자동차 이름이 5글자를 초과할 시 에러 반환", () => {
      expect(() => {
        UserInterface.validateCarNames("car,toolongname");
      }).toThrow("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    });

    test("자동차 이름 중복 시 에러 반환", () => {
      expect(() => {
        UserInterface.validateCarNames("car,car");
      }).toThrow("[ERROR] 자동차 이름이 중복됩니다.");
    });

    test("자동차 이름 설정 시 배열 반환", () => {
      expect(UserInterface.validateCarNames("car1,car2")).toEqual([
        "car1",
        "car2",
      ]);
    });

    test("자동차 이름에 공백이 있을 시 에러 반환", () => {
      expect(() => {
        UserInterface.validateCarNames("car,,car2");
      }).toThrow("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    });
  });

  describe("validateRounds 함수", () => {
    test("시도 횟수가 양의 정수가 아닐 시 에러 반환", () => {
      expect(() => {
        UserInterface.validateRounds("-1");
      }).toThrow("[ERROR] 시도 횟수는 양의 정수만 가능합니다.");

      expect(() => {
        UserInterface.validateRounds("0");
      }).toThrow("[ERROR] 시도 횟수는 양의 정수만 가능합니다.");

      expect(() => {
        UserInterface.validateRounds("3.5");
      }).toThrow("[ERROR] 시도 횟수는 양의 정수만 가능합니다.");

      expect(() => {
        UserInterface.validateRounds("text");
      }).toThrow("[ERROR] 시도 횟수는 양의 정수만 가능합니다.");
    });

    test("양의 정수를 입력했을 때 정수 반환", () => {
      expect(UserInterface.validateRounds("5")).toBe(5);
    });
  });
});
