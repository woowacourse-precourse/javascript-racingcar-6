import Car from "../src/Car";

describe("Car 클래스 테스트", () => {
  test("이름이 5자가 넘어가지 않는지 확인", () => {
    expect(() => new Car('Son,Kane,Hazard')).toThrow('[ERROR] 이름은 5자 이하만 가능합니다');
  });
  

});