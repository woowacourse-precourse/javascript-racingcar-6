import NameToKeyValueConverter from "../../../../src/controller/game/NameToKeyValueConverter";
import TEST_NAME from "../../../../src/constants/testName";

describe("정상 진행 테스트", () => {
  test("key : value 값이 정상적으로 분리 되어야 함.", async () => {
    // given
    const name = [TEST_NAME.carOne, TEST_NAME.carTwo, TEST_NAME.carThree];
    // when, then
    const expectedKeyValue = [{ [TEST_NAME.carOne]: "" }, { [TEST_NAME.carTwo]: "" }, { [TEST_NAME.carThree]: "" }];
    expect(NameToKeyValueConverter(name)).toEqual(expectedKeyValue);
  });
});

