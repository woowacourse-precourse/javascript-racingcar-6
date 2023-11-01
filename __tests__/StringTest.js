import App from '../src/App.js';
import Car from '../src/Car.js';
describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = input.split(",");

    expect(result).toContain("1");
  });

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });

});

describe('getWinners', () => {
  test('우승한 자동차 이름 반환', () => {
    const app = new App();
    const car1 = new Car('Car1');
    const car2 = new Car('Car2');
    car1.position = 5;
    car2.position = 5;
    app.carList = [car1, car2];

    const winners = app.getWinners(app.carList);

    expect(winners).toEqual([car1.name, car2.name]);
  });
});

describe('getMaxPosition', () => {
  test('가장 큰 position 반환', () => {
    const app = new App();
    const car1 = new Car('Car1');
    const car2 = new Car('Car2');
    car1.position = 5;
    car2.position = 3;
    app.carList = [car1, car2];

    const maxPosition = app.getMaxPosition(app.carList);

    expect(maxPosition).toBe(5);
  });
});