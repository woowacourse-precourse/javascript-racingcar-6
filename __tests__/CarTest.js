import Car from "../src/models/Car.js"

describe("Car 모듈 함수 테스트", () => {
    test("distance가 주어졌을 때 올바른 형식으로 출력하는지 확인", () => {
        const car = new Car("pobi");
        car.distance = 3;

        expect(car.returnDistanceString()).toEqual("pobi : ---");
    });

});
