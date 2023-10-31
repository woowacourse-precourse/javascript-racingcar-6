import caculateEachTurnMoving from "../src/util/calculateEachTurnMoving.js";
import { Random } from "@woowacourse/mission-utils";

const mockRandoms = (input) => {
    Random.pickNumberInRange = jest.fn()
    Random.pickNumberInRange.mockImplementation(() => input)
}


describe("랜덤으로 결정된 숫자에 따른 입력값 결과 확인하기", ()=> {
    test.each([0, 1, 2, 3])("3 이하의 숫자가 나올시 결과는 ''", async(input)=> {
        // given
        mockRandoms(input);

        // then
        expect(caculateEachTurnMoving()).toMatch("");
    });

    test.each([4, 5, 6, 7, 8, 9])("4 이상의 숫자가 나올기 결과는 '-'", async(input)=> {
        // given
        mockRandoms(input);

        // then
        expect(caculateEachTurnMoving()).toMatch("-");
    });
})