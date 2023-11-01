import CarRace from "../../src/Model/CarRace.js";
import Car from "../../src/Model/Car.js";

jest.mock("../../src/Model/Car");

let carRace, carNameList, raceCount;
Car.mockImplementation((name) => {
  return { name, position: 0, move: jest.fn().mockReturnValue({ name, position: name.length }) };
});

describe("CarRace 클래스 테스트", () => {
  beforeEach(() => {
    raceCount = 5;
    carNameList = ["pobi", "woni", "jun"];
    carRace = new CarRace(carNameList, raceCount);
  });
  test("CarRace 인스턴스를 생성할 수 있어야 한다.", () => {
    expect(carRace).toBeDefined();
  });

  test("doRace 메서드를 가지고 있어야 한다.", () => {
    expect(typeof carRace.doRace).toBe("function");
  });

  test("doRace 메서드를 실행하면 carNameList.length x raceCount 만큼의 배열을 반환해야 한다.", () => {
    const raceResult = carRace.doRace();
    expect(raceResult[0].length).toBe(carNameList.length);
    expect(raceResult.length).toBe(raceCount);
  });

  test("determineWinner 메서드를 가지고 있어야 한다.", () => {
    expect(typeof carRace.determineWinner).toBe("function");
  });

  test("determineWinner의 결과 우승자를 반환해야 한다.", () => {
    carRace.doRace();
    const winner = carRace.determineWinner();
    expect(winner).toBe("pobi, woni");
  });
});
