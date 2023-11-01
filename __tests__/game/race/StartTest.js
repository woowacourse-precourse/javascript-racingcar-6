import { Cars } from "../../../src/game/Cars.js";
import { Computer } from "../../../src/game/Computer.js";
import { Race } from "../../../src/game/Race.js";

const carNames = ["pobi","hj","jedi"];
const carInstances = new Computer().makeNewCars(carNames);
const cars = new Cars(carInstances);
const tryInput = 5;
const race = new Race(cars, tryInput);

test("시도 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다",()=>{
    const carsMove = jest.spyOn(cars, "move");
    race.start();

    expect(carsMove).toHaveBeenCalledTimes(tryInput)
})