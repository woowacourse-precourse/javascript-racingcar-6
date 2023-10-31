import NameToKeyValueConverter from "../../../../src/controller/game/nameToKeyValueConverter";
import NUMBERS from "../../../../src/constants/numbers";
import testName from "../../../../src/constants/testName";

describe("정상 진행 테스트", () => {
  test("key : value 값이 정상적으로 분리 되어야 함.", async () => {
    // given
    const name = [testName.carOne, testName.carTwo, testName.carThree];
    const number = NUMBERS.four;

    // when
    const nameToKeyValueConverter = new NameToKeyValueConverter();

    // then
    const expectedKeyValue = [{ [testName.carOne]: "" }, { [testName.carTwo]: "" }, { [testName.carThree]: "" }];
    expect(nameToKeyValueConverter.converter(name, number)).toEqual(expectedKeyValue);
  });
});
