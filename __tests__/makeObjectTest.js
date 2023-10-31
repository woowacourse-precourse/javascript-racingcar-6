import makeObject from "../src/makeObject";

describe("makeObject", () => {
  test("객체 만들기 테스트", () => {
    //given
    const PARTICIPANTS = ["car1", "car2", "car3"];
    const player = {};

    //when
    makeObject(PARTICIPANTS, player);

    //then
    expect(player).toEqual({ car1: "", car2: "", car3: "" });
  });
});
