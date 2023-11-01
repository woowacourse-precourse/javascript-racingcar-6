import { RandomGenerator } from "../../../src/RandomGenerator.js";
import { Car } from "../../../src/game/Car.js";
import { Cars } from "../../../src/game/Cars.js";
import { Race } from "../../../src/game/Race.js";
import { printResult } from "../../../src/output/result.js";

const loserCar = new Car("loserCar", new RandomGenerator(0,3));
const winnerCarName="winnerCar"
const winnerCar = new Car(winnerCarName, new RandomGenerator(4,9));
const greatestPosition = 3;
const cars =  new Cars([loserCar, winnerCar]);
const race = new Race(cars);
const printFinalResultSpy = jest.spyOn(printResult, "final");

describe("모든 시도 가 끝난 후 최종 결과 출력",()=>{
    test("위치 가 가장 큰 우승 자동차 선별", ()=>{
        for(let i=0; i<greatestPosition; i++){
            winnerCar.move();
        }

        const winners = race.getWinners(cars, greatestPosition);

        expect(winners).toEqual([winnerCarName]);
    })

    test("우승자가 여러 명일 경우 `쉼표(,)` 를 이용하여 구분 하여 출력", ()=>{
        race.end();
        
        expect(printFinalResultSpy).toHaveBeenCalledWith([winnerCarName]);
    })
})
