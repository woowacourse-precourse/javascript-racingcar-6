import { Random } from "@woowacourse/mission-utils";
import { RandomGenerator } from "../src/RandomGenerator.js";

const randomSpy = jest.spyOn(Random, "pickNumberInRange");
const min = 0, max = 9;
const randomGenerator = new RandomGenerator(min, max);

describe("무작위 값 생성 기능 RandomGenerator 클래스 테스트",()=>{
    test("인스턴스 생성", ()=>{
        expect(randomGenerator.min).toBe(min)
        expect(randomGenerator.max).toBe(max)    
    })

    test("generate",()=>{
        randomGenerator.generate();
        expect(randomSpy).toHaveBeenCalledWith(min, max)
    })
})
