import { MESSAGE } from "../../../src/constants.js";
import { validate } from "../../../src/input/validations.js";

const limitExceededInput = ["abcdefg"];
const duplicatedInput = ["hj","hj"];
const empty =[' '];
const emptyInMiddle =["hj"," ","hj"]

describe("경주 할 n 대의 자동차 이름 입력 유효성",()=>{
    test("공백을 포함한 자동차 이름의 길이가 `5` 이상일 경우", ()=> {
        const result = ()=> validate.carNames(limitExceededInput);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_OVER_FIVE);
    })

    test("중복된 자동차 이름이 있는 경우", ()=> {
        const result = ()=> validate.carNames(duplicatedInput);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_DUPLICATED);
    })

    test("입력이 없는 경우", ()=> {
        const result = ()=> validate.carNames(empty);
        expect(result).toThrow(MESSAGE.COMMON.ERROR.IS_NOT_INPUT);
    })

    test("n 대의 자동차 중 중간에 공백 만 포함되어 있는 경우", ()=> {
        const result = ()=> validate.carNames(emptyInMiddle);
        expect(result).toThrow(MESSAGE.CAR_NAME.ERROR.IS_INCLUDE_SPACE);
    })
})      