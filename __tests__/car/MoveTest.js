import { Random } from "@woowacourse/mission-utils";
import { Car } from "../../src/game/Car.js"
import { RandomGenerator } from "../../src/RandomGenerator.js";

const randomApiSpy = jest.spyOn(Random, "pickNumberInRange");

describe("자동차 전진", ()=> {
    test("무작위 값 생성", ()=>{
        const randomGenerator = new RandomGenerator(0,9);
        const car = new Car("testCar", randomGenerator);
        expect(car).toBeTruthy();
        
        const randomNumber= car.randomNumber();
        expect(randomApiSpy).toHaveBeenCalled();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
    })

    test("무작위 값 이 4 이상일 경우 전진 조건 달성", ()=> {
        const randomGenerator = new RandomGenerator(4,9);
        const car = new Car("testCar", randomGenerator);

        expect(car.movable()).toBe(true);   
    })
 
    test("전진 조건일 때 position 값 증가", ()=> {
        const randomGenerator = new RandomGenerator(4,9);
        const car = new Car("testCar", randomGenerator);
        const prevPosition = car.getPosition();
        
        car.moveOrStop();

        const nextPosition = car.getPosition();

        expect(nextPosition).toBe(prevPosition+1)            
    })
})