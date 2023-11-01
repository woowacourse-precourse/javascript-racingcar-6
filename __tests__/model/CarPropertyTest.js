import CarProperty from "../../src/model/carProperty";

describe("이름 입력값으로 자동차 객체배열 만들어주기", () => {
  test("이름 입력 시 ,단위로 배열 생성", async () => {
    //given
    const input = "one, two, three";
    const output = ["one", "two", "three"];
    //when
    const result = CarProperty.splitStringMakeArray(input);

    //then
    expect(result).toEqual(output);
  });

  test("이름 양쪽 여백 제거", async () => {
    //given
    const input = ["one ", "  two  ", " th ree    "];
    const output = ["one", "two", "th ree"];
    //when
    const result = CarProperty.removeSideBlank(input);

    //then
    expect(result).toEqual(output);
  });

  test("자동차 객체배열 만들기 성공", async () => {
    //given
    const input = "one, two, three";
    const output = [
      { name: "one", distance: 0 },
      { name: "two", distance: 0 },
      { name: "three", distance: 0 },
    ];
    //when
    const carProperty = new CarProperty();
    const array = carProperty.carArray;
    await carProperty.makeCarArray(input);

    //then
    expect(array).toEqual(output);
  });
});
