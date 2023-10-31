import { Random } from "@woowacourse/mission-utils";
import { Car } from "../../src/Car"
import { GO_CONDITION_MINIMUM_VALUE, RANDOM_NUMBER_RANGE } from "../../src/constants";

let car;

beforeEach(()=> {
    initializeCarInstance();
})

const initializeCarInstance = ()=>{
    car = new Car("testCar");
    expect(car).toBeTruthy();
}

const randomNumberSpy = jest.spyOn(Random, "pickNumberInRange");

describe("자동차 전진", ()=> {
    test("무작위 값 생성", ()=>{
        expect(randomNumberSpy).toHaveBeenCalled();
        expect(car.randomNumber).toBeGreaterThanOrEqual(0);
    })

    test("무작위 값 이 4 이상일 경우 전진 조건 달성", ()=> {
        if(car.randomNumber >= GO_CONDITION_MINIMUM_VALUE){
            expect(car.movable()).toBe(true)
        }
    })
 
    test("전진 조건일 때 position 값 증가", ()=> {
        const prevPosition = car.getPosition();

        car.moveOrStop();
        
        const nextPosition = car.getPosition();

        if(car.movable()){
            expect(nextPosition).toBe(prevPosition+1)
            return;
        }
        expect(nextPosition).toBe(prevPosition)
    })
})