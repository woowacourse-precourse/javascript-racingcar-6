import {  MESSAGE } from "../../../src/constants.js";
import { validate } from "../../../src/input/validations.js";

const string = 'a';
const minus = '-2';
const empty =' ';

describe("시도 횟수 입력 유효성", ()=> {
    test("숫자가 아닌 다른 타입의 값이 입력 될 경우", ()=> {
        const result = ()=> validate.try(string);
        expect(result).toThrow(MESSAGE.TRY.ERROR.IS_NOT_NUMBER);
    })

    test("0 이하의 숫자가 입력 될 경우", ()=> {
        const result = ()=> validate.try(minus);
        expect(result).toThrow(MESSAGE.TRY.ERROR.IS_MINUS);
    })

    test("입력이 없는 경우", ()=> {
        const result = ()=> validate.try(empty);
        expect(result).toThrow(MESSAGE.COMMON.ERROR.IS_NOT_INPUT);
    })
})