import { MESSAGE } from "../../../src/constants.js";
import { validate } from "../../../src/input/validations.js";

const limitExceededInput = ["abcdefg"];
const duplicatedInput = ["hj","hj"];
const empty =[' '];
const emptyInMiddle =["hj"," ","hj"]

describe("자동차 이름 입력 유효성 검증",()=>{
    test("문자열 길이 5 이하 검증", ()=> {
        const result = ()=> validate.carNames(limitExceededInput);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_OVER_FIVE);
    })

    test("중복된 자동차 이름 검증", ()=> {
        const result = ()=> validate.carNames(duplicatedInput);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_DUPLICATED);
    })

    test("입력 값이 있는 지 검증", ()=> {
        const result = ()=> validate.carNames(empty);
        expect(result).toThrow(MESSAGE.COMMON.ERROR.IS_NOT_INPUT);
    })

    test("입력 값이 있는 지 검증", ()=> {
        const result = ()=> validate.carNames(emptyInMiddle);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_INCLUDE_SPACE);
    })
})      