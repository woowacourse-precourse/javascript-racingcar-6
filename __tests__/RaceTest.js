import Race from "../src/model/Race.js";
import Car from "../src/model/Car.js";

describe("Race 클래스 테스트", () => {

  test("자동차 배열에 저장하는 기능", () => {
    const carNames = "pobi,woni,jun";
    const race = new Race(carNames);

    const expectedCars = carNames.split(",").map(name => new Car(name));
    const actualCars = race.getCars();

    expectedCars.forEach((expectedCar, index) => {
      expect(expectedCar.getName()).toBe(actualCars[index].getName());
    });
  });

  test("경주 시도 횟수 저장 기능", () => {
    const carNames = "pobi,woni,jun";
    const race = new Race(carNames);

    const trial = 5;
    race.setTrial(trial);

    expect(race.getTrial()).toBe(trial);
  });
});