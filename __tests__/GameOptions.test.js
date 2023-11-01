import { Car } from "../src/Car.js";
import { GameOptions } from "../src/GameOptions.js";

describe("GameOptions 단위 테스트", () => {
  test("생성자로 입력을 검증할 수 있다. [성공 케이스]", () => {
    const CARS = ["pobi", "hello"].map((name) => new Car(name));
    const TOTAL_MOVES = 0;

    new GameOptions(CARS, TOTAL_MOVES);
  });
  
  test("생성자로 입력을 검증할 수 있다. [성공 케이스]", () => {
    const CARS = [];
    const TOTAL_MOVES = 0;

    new GameOptions(CARS, TOTAL_MOVES);
  });
  
  test("생성자로 입력을 검증할 수 있다. [실패 케이스]", () => {
    const CARS = null;
    const TOTAL_MOVES = 0;

    expect(() => {
        new GameOptions(CARS, TOTAL_MOVES);
    }).toThrow("[GameOptions] cars - invalid argument");

  });
  
  test("생성자로 입력을 검증할 수 있다. [실패 케이스]", () => {
    const CARS = ["pobi", "hello"].map((name) => new Car(name));

    expect(() => {
        new GameOptions(CARS);
    }).toThrow("[GameOptions] totalMoves - invalid argument");

  });
  
  test("생성자로 입력을 검증할 수 있다. [실패 케이스]", () => {
    const CARS = ["pobi", "hello"].map((name) => new Car(name));
    const TOTAL_MOVES = "BAD VALUE";

    expect(() => {
        new GameOptions(CARS, TOTAL_MOVES);
    }).toThrow("[GameOptions] totalMoves - invalid argument");

  });
});
