import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";

const carName = "hj";
const car = new Car(carName, randomGenerator);
const randomGenerator = new RandomGenerator(0,9);

describe("자동차는 전진 또는 멈출 수 있다", ()=>{
    test("무작위 값 >= 4 일 경우, 전진", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        expect(movableCar.movable()).toBe(true);
    })

    test("전진 했다면 위치를 `1` 증가", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        movableCar.move()

        expect(movableCar.getPosition()).toBeGreaterThan(0);
    })
})