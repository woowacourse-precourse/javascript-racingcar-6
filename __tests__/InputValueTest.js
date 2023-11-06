import { checkRacingCarName } from "../src/Util/Validation.js";
import { ERROR_MESSAGE } from "../src/Util/Message.js";

describe("자동차 경주 입력값 길이 유효성 검사", () => {

  const checkCarNameLength = () => {
    const errorTestCase = [
      'pobiqw,jun,qwe',
      'pobi,woni23,asd',
      'woni233'
    ]

    const passTestCase = [
      'pobi,jun,qwe',
      'pobi',
      'pobi,jun,qwe,aaa,www,123,1||2,8/*1'
    ]

    errorTestCase.forEach((testCase) => {
      test("자동차 이름 길이가 6이상일 때 에러 발생", () => {
        expect(() => checkRacingCarName(testCase)).toThrow(ERROR_MESSAGE.NAME_LENGTH);
      })
    })

    passTestCase.forEach((testCase) => {
      test("자동차 이름 길이가 5이하일 때 통과", () => {
        expect(() => checkRacingCarName(testCase)).not.toThrow();
      })
    })
  }

  checkCarNameLength();
})

describe("자동차 경주 공백 유효성 검사", () => {

  const checkCarNameBlank = () => {
    const errorTestCase = [
      '',
      'pobi,,asd',
      ',woni,jun',
      'pobi,jun,',
      ',',
      'pobi, ,jun',
      'pobi,jun,    '
    ]

    errorTestCase.forEach((testCase) => {
      test("자동차 이름이 공백 포함되었을 때 에러 발생", () => {
        expect(() => checkRacingCarName(testCase)).toThrow(ERROR_MESSAGE.NAME_BLANK);
      })
    })
  }

  checkCarNameBlank();
})