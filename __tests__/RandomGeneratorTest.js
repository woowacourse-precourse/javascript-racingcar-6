import { Random } from "@woowacourse/mission-utils";
import { RandomGenerator } from "../src/RandomGenerator.js";

test("전진 또는 멈춤을 결정할 0 - 9 사이의 무작위 값 구하기",()=>{
    const randomSpy = jest.spyOn(Random, "pickNumberInRange");
    const min = 0, max = 9;
    const randomGenerator = new RandomGenerator(min, max);

    randomGenerator.generate();
    expect(randomSpy).toHaveBeenCalledWith(min, max)
})
