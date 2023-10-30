import { ERROR_PREFIX } from "../../src/constants.js";
import { validate } from "../../src/input/validations.js";

describe("시도 횟수 입력", ()=> {
    test.each(['a', '-2', ' '])(`시도 횟수 %s 입력 결과`,(param)=>{
        const result = ()=> validate.try(param);
        expect(result).toThrow(ERROR_PREFIX);
    })
})