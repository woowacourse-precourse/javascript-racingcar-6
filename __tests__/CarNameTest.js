import Car from "../src/Car";

describe("올바른 car 객체 판단 테스트", () => {  
  const carList = ['아빠차', '엄마차', '내차'];
  
  test("자동차 이름 테스트", () => {
    const testList = carList.map((car) => new Car(car, 0));
    testList.forEach((car, index) => expect(car.getCarName()).toEqual(carList.at(index)));
  });
});