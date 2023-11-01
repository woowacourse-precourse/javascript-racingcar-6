import { Cars } from "../../../src/game/Cars.js";
import { Computer } from "../../../src/game/Computer.js";
import { Race } from "../../../src/game/Race.js";
import { printResult } from "../../../src/output/result.js";

test("시도 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다",()=>{
    const carInstances = new Computer().makeNewCars(["pobi","hj","jedi,a,b,c,d,e"]);
    const cars = new Cars(carInstances);
    const carsMoveSpy = jest.spyOn(cars, "move");
    const printResultEachSpy = jest.spyOn(printResult, "each");
    const tryInput = 500;
    const race = new Race(cars, tryInput);
    
    race.start();

    expect(carsMoveSpy).toHaveBeenCalledTimes(tryInput)
    expect(printResultEachSpy).toHaveBeenCalledTimes(tryInput * cars.getList().length)
})