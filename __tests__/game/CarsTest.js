import { RandomGenerator } from "../../src/RandomGenerator.js";
import { Car } from "../../src/game/Car.js";
import { Cars } from "../../src/game/Cars.js";

const addNewCarsSpy = jest.spyOn(Cars.prototype, "addNewCars");
const makeNewRandomGeneratorSpy = jest.spyOn(Cars.prototype, "makeNewRandomGenerator")
const carNames = ["pobi", "hj", "jedi"];
const cars = new Cars(carNames);

describe("n 대의 자동차 관련 기능 담당 Cars 클래스 테스트", ()=> {
    test("인스턴스 생성", ()=>{
        expect(addNewCarsSpy).toHaveBeenCalled()
    })

    test("makeNewCar", ()=>{
        const newCarName = "hj"        
        const newCar = cars.makeNewCar(newCarName);

        expect(makeNewRandomGeneratorSpy).toHaveBeenCalled();
        expect(newCar).toBeInstanceOf(Car);
        expect(newCar.getName()).toBe(newCarName)
    })

    test("addNewCars", ()=>{
        cars.getList().forEach(car=> {
            expect(cars.getList()).toEqual(expect.arrayContaining([car]))
        })

        expect(cars.getList().length).toBe(carNames.length);
    })

    test("makeNewRandomGenerator",()=>{
        const randomGenerator = cars.makeNewRandomGenerator();

        expect(randomGenerator).toBeInstanceOf(RandomGenerator);
    })
})