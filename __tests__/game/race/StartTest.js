import { Cars } from "../../../src/game/Cars.js";
import { Computer } from "../../../src/game/Computer.js";
import { Race } from "../../../src/game/Race.js";

const carNames = ["pobi","hj","jedi"];
const carInstances = new Computer().makeNewCars(carNames);
const cars = new Cars(carInstances);
const tryInput = 5;
const race = new Race(cars, tryInput);

test("자동차 경주 게임 시작",()=>{
    const carsMove = jest.spyOn(cars, "move");
    race.start();

    expect(carsMove).toHaveBeenCalledTimes(tryInput)
})