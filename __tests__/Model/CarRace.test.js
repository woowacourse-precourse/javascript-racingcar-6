import CarRace from "../../src/Model/CarRace";

describe("CarRace 클래스 테스트", () => {
  test("CarRace 인스턴스를 생성할 수 있어야 한다.", () => {
    const carRace = new CarRace(["pobi", "woni", "jun"], 5);
    expect(carRace).toBeDefined();
  });
});
