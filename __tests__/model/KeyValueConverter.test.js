import nameToKeyValueConverter from "../../src/MVC/controller/game/nameToKeyValueConverter";
import NUMBERS from "../../src/MVC/Constants/numbers";

describe("정상 진행 테스트", () => {
  test("key : value 값이 정상적으로 분리 되어야 함.", async () => {
    // given
    const name = ["hyuri", "hyu", "rim"];
    const number = NUMBERS.four;

    // when, then
    const expectedKeyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    expect(nameToKeyValueConverter(name, number)).toEqual(expectedKeyValue);
  });
});
