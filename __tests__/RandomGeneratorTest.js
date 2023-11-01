import { Random } from "@woowacourse/mission-utils";
import { RandomGenerator } from "../src/RandomGenerator.js";

const randomSpy = jest.spyOn(Random, "pickNumberInRange");
const min = 0, max = 9;
const randomGenerator = new RandomGenerator(min, max);

describe("무작위 값 생성",()=>{
    test("무작위 값 생성기 인스턴스 생성", ()=>{
        expect(randomGenerator.min).toBe(min)
        expect(randomGenerator.max).toBe(max)    
    })

    test("무작위 값 생성",()=>{
        randomGenerator.generate();
        expect(randomSpy).toHaveBeenCalledWith(min, max)
    })
})
