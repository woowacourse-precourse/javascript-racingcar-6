import { printWinner } from "../src/App.js";
import Car from "../src/Car.js";

describe("자동차 경주 우승자 출력 테스트", () => {
  test("headCount 수를 세어 가장 높은 우승자를 출력", () => {
    const car1 = new Car("pobi"); car1.addHeadCount(); car1.addHeadCount();
    const car2 = new Car("woni"); car2.addHeadCount();
    const car3 = new Car("jun"); car3.addHeadCount(); car3.addHeadCount();
    const carList = [car1, car2, car3];

    expect(printWinner(carList)).toEqual(["pobi","jun"]);
  });
});