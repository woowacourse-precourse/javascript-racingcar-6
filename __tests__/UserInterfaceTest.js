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
  });
});
