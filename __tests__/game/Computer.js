import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";
import { Computer } from "../../src/game/Computer.js";

const makeNewRandomGeneratorSpy = jest.spyOn(Computer.prototype, "makeNewRandomGenerator")
const makeNewCarSpy = jest.spyOn(Computer.prototype, "makeNewCar")

const computer = new Computer();
const carNames = ["pobi", "hj", "jedi"];

describe("n 대의 자동차 생성", ()=> {
    test("n 대의 자동차 생성", ()=>{
        computer.makeNewCars(carNames);
        expect(makeNewCarSpy).toHaveBeenCalledTimes(carNames.length)
    })

    test("1 대의 자동차 생성", ()=>{
        const newCarName = "hj"        
        const newCar = computer.makeNewCar(newCarName);

        expect(makeNewRandomGeneratorSpy).toHaveBeenCalled();
        expect(newCar).toBeInstanceOf(Car);
        expect(newCar.getName()).toBe(newCarName);        
    })

    test("자동차 의 전진 조건을 결정할 무작위 값 생성기 생성",()=>{
        const randomGenerator = computer.makeNewRandomGenerator();

        expect(randomGenerator).toBeInstanceOf(RandomGenerator);
    })
})