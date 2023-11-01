import { DIVIDER, ERROR_PREFIX } from "../src/constants"
import { errorMessage, getGreatestNumber, numberToHyphen, stringToArray } from "../src/utils"

describe("유틸 함수", ()=>{
    test("에러 메세지 반환", ()=> {
        const issue="에러 테스트"
        expect(errorMessage(issue)).toBe(`${ERROR_PREFIX}${issue}`)
    })

    test.each(['pobi, hj', 'pobi'])("문자열 %s 을 ',' 을 기준으로 배열로 변환", ("문자열 %s 을 ',' 을 기준으로 배열로 변환", (param)=> {
        expect(stringToArray(param)).toEqual(param.split(DIVIDER))
    }))

    test("숫자 배열 내에서 가장 큰 수 구하기", ()=>{
        expect(getGreatestNumber([1,2,999])).toBe(999)
        expect(getGreatestNumber([1,2,3,4,5,6,7,8,999,8,7,6,5,4,3,2,1])).toBe(999)
    })

    test("숫자 만큼의 길이의 문자열 만들기", ()=>{
        expect(numberToHyphen(5)).toBe("-----")
    })
})