import { ERROR_PREFIX } from "../../src/constants";
import { TryValidation } from "../../src/userInput/try/Validation";

describe("시도 횟수 입력", ()=> {
    test.each(['a', '-2', ' '])(`시도 횟수 %s 입력 결과`,(param)=>{
        const validation = new TryValidation(param);
        const result = ()=> validation.validate();
        expect(result).toThrow(ERROR_PREFIX);
    })
})