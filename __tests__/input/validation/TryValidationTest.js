import {  MESSAGE } from "../../../src/constants.js";
import { validate } from "../../../src/input/validations.js";

const string = 'a';
const minus = '-2';
const empty =' ';

describe("시도 횟수 입력 유효성 검증", ()=> {
    test("숫자 가 입력되었는 지 검증", ()=> {
        const result = ()=> validate.try(string);
        expect(result).toThrow(MESSAGE.TRY.ERROR.IS_NOT_NUMBER);
    })

    test("0 이상의 숫자가 입력되었는 지 검증", ()=> {
        const result = ()=> validate.try(minus);
        expect(result).toThrow(MESSAGE.TRY.ERROR.IS_MINUS);
    })

    test("입력 값이 있는 지 검증", ()=> {
        const result = ()=> validate.try(empty);
        expect(result).toThrow(MESSAGE.TRY.ERROR.IS_NOT_INPUT);
    })
})