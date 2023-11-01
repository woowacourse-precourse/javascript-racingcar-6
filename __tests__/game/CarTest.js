import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";

const carName = "hj";
const car = new Car(carName, randomGenerator);
const randomGenerator = new RandomGenerator(0,9);

describe("자동차 전진 조건 확인 및 전진 후 위치 값 1 증가", ()=>{
    test("자동차 인스턴스 생성",()=>{
        expect(car.getName()).toBe(carName)
        expect(car.getPosition()).toBe(0);
    })

    test("자동차 전진 조건 true 일 경우", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        expect(movableCar.movable()).toBe(true);
    })

    test("자동차 전진 후 위치 값 1 증가", ()=>{
        const movableRandomNumberGenerator=  new RandomGenerator(4,9);
        const movableCar = new Car(carName, movableRandomNumberGenerator);

        movableCar.move()

        expect(movableCar.getPosition()).toBeGreaterThan(0);
    })
})