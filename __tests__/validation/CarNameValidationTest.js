import { ERROR_PREFIX } from "../../src/constants.js";
import { validate } from "../../src/input/validations.js";

const limitExceededInput = ["abcdefg"];
const duplicatedInput = ["hj","hj"]

describe("자동차 이름 입력 유효성 검증",()=>{
    test("문자열 길이 5 이하 검증", ()=> {
        const result = ()=> validate.carNames(limitExceededInput);
        expect(result).toThrow(ERROR_PREFIX);
    })

    test("중복된 자동차 이름 검증", ()=> {
        const result = ()=> validate.carNames(duplicatedInput);
        expect(result).toThrow(ERROR_PREFIX);
    })
})      