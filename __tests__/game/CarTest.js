import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";

const carName = "hj";
const car = new Car(carName, randomGenerator);
const randomGenerator = new RandomGenerator(0,9);

describe("자동차 테스트", ()=>{
    test("인스턴스 생성",()=>{
        expect(car.getName()).toBe(carName)
        expect(car.getPosition()).toBe(0);
    })

    test("movable", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        expect(movableCar.movable()).toBe(true);
    })

    test("move", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        movableCar.move()

        expect(movableCar.getPosition()).toBeGreaterThan(0);
    })
})