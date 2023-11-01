import NameToKeyValueConverter from "../../../../src/controller/game/NameToKeyValueConverter";
import testName from "../../../../src/constants/testName";

describe("정상 진행 테스트", () => {
  test("key : value 값이 정상적으로 분리 되어야 함.", async () => {
    // given
    const name = [testName.carOne, testName.carTwo, testName.carThree];
    // when, then
    const expectedKeyValue = [{ [testName.carOne]: "" }, { [testName.carTwo]: "" }, { [testName.carThree]: "" }];
    expect(NameToKeyValueConverter(name)).toEqual(expectedKeyValue);
  });
});

