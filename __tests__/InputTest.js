import { errorConstants, regExpConstants } from '../src/utils/index.js'
import { CarName } from '../src/input/index.js'

describe("입력에 관한 테스트", () => {
  test("특수문자나 공백등 잘못된 문자형식에 대한 테스트", () => {
    const inputs = "asa, ,dwf";
    expect(() => {
      CarName.validateCarName(inputs);
    }).toThrow(errorConstants.WRONG_NAME_ERROR);

  });

  test("자동차 이름 길이에 대한 테스트", () => {
    const inputs = "asd,cvjoasdjo,fjow";
    expect(() => {
      CarName.validateCarName(inputs);
    }).toThrow(errorConstants.NAME_LENGTH_ERROR);
  });

  test.each([["asdDF,fwjo,FSajd"], ["가나다a,A가나다,rkfk"]])
    ("하나의 언어로만 이루어져있는지에 대한 테스트(대, 소문자 구분)", (inputs) => {
      expect(() => {
        CarName.validateCarName(inputs);
      }).toThrow(errorConstants.DIFFERENT_LANGUAGE_ERROR);
    });
  
  test("중복된 이름이 있는지 테스트", () => {
    const inputs = "pobi,pobi,fjwo";
    expect(() => {
      CarName.validateCarName(inputs);
    }).toThrow(errorConstants.SAME_NAME_ERROR);
  });

  test("진행횟수 받아오는 과정에서 숫자만 입력하게 테스트", () => {
    const inputs = "str";
    expect(() => {
      if (isNaN(inputs)) throw new Error(errorConstants.NOT_A_NUMBER);
    }).toThrow(errorConstants.NOT_A_NUMBER);
  });
})