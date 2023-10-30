import { ERROR_PREFIX } from "../../src/constants";
import { CarNameValidation } from "../../src/userInput/car/Validation";

const limitExceededInput = "abcdef";

describe("자동차 이름 입력 유효성 검증",()=>{
    test("유효성 클래스 인스턴스 유무", ()=>{
        const validation = new CarNameValidation("");
        expect(validation).toBeTruthy();
    })

    test("문자열 길이 5 이하 검증", ()=> {
        const validation = new CarNameValidation(limitExceededInput);
        const result = ()=> validation.validate();
        expect(result).toThrow(ERROR_PREFIX);
    })
})