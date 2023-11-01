import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";
import { Computer } from "../../src/game/Computer.js";


const makeNewRandomGeneratorSpy = jest.spyOn(Computer.prototype, "makeNewRandomGenerator")

const makeNewCarSpy = jest.spyOn(Computer.prototype, "makeNewCar")

const computer = new Computer();
const carNames = ["pobi", "hj", "jedi"];

describe("n 대의 자동차 생성", ()=> {
    test("makeNewCars", ()=>{
        computer.makeNewCars(carNames);
        expect(makeNewCarSpy).toHaveBeenCalledTimes(carNames.length)
    })

    test("makeNewCar", ()=>{
        const newCarName = "hj"        
        const newCar = computer.makeNewCar(newCarName);

        expect(makeNewRandomGeneratorSpy).toHaveBeenCalled();
        expect(newCar).toBeInstanceOf(Car);
        expect(newCar.getName()).toBe(newCarName);        
    })

    test("makeNewRandomGenerator",()=>{
        const randomGenerator = computer.makeNewRandomGenerator();

        expect(randomGenerator).toBeInstanceOf(RandomGenerator);
    })
})