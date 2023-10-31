import CarController from "../src/controller/car-controller.js";

describe("불필요한 공백 제거한 자동차 이름 처리 테스트", () => {
  test("모든 이름 길이가 0인지 확인", () => {
    // given
    const namesGroup = [
      ["", "", "", ""],
      ["", "4", "", ""],
    ];
    const results = [true, false];

    // when
    const carController = new CarController();
    const answers = namesGroup.map((names) => carController.checkAllNamesEmpty(names));

    // then
    expect(answers).toEqual(results);
  });

  test("중복된 이름이 있는지 확인", () => {
    // given
    const nameGroup = [
      ["a", "a", "b"],
      ["1", "2", "3"],
    ];
    const results = [true, false];

    // when
    const carController = new CarController();
    const answers = nameGroup.map((names) => carController.checkDuplicatedName(names));

    // then
    expect(answers).toEqual(results);
  });
});
