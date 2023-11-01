import Car from "../src/Car";

describe("Car 클래스 테스트", () => {
  test("이름이 5자가 넘어가지 않는지 확인", () => {
    expect(() => new Car('Son,Kane,Hazard')).toThrow('[ERROR] 이름은 5자 이하만 가능합니다');
  });
  
  test("우승자 계산이 제대로 되는지 확인", () => {
    const car = new Car('Son,Kane,Hazard');
    car.far = [6, 7, 8];
    car.printResult();
    expect(console.log).toHaveBeenCalledWith('최종우승자 : Hazard');
  });
});