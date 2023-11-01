import { Cars } from "../../../src/game/Cars.js";
import { Computer } from "../../../src/game/Computer.js";
import { Race } from "../../../src/game/Race.js";

test("시도 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다",()=>{
    const carInstances = new Computer().makeNewCars(["pobi","hj","jedi"]);
    const cars = new Cars(carInstances);
    const carsMoveSpy = jest.spyOn(cars, "move");
    const tryInput = 5;
    const race = new Race(cars, tryInput);
    
    race.start();

    expect(carsMoveSpy).toHaveBeenCalledTimes(tryInput)
})