import App from "../src/App.js";

describe("우승자 출력 테스트", () => {
  test("우승자 2명일 때 2명 다 출력하는지 테스트", () => {
    const INPUT_FINAL_COUNT_ARRAY = [4, 5, 5];
    const CAR_NAME_ARRAY = ['sim', 'ho', 'rim'];
    const APP = new App();
    
    expect(APP.printResult(INPUT_FINAL_COUNT_ARRAY, CAR_NAME_ARRAY)).toBe("최종 우승자 : ho,rim");
  });

});