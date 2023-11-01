import Car from "../../src/domain/Car.js";
import {MoveDecider} from "../../src/domain/MoveDecider.js";

describe("Car의 비즈니스 로직", () => {
    test("Car를 성공적으로 생성할 수 있다", async () => {
        // given
        const input = 'a';

        // when
        const car = new Car(input)

        //then
        expect(car.name).toBe(input);
        expect(car.distance).toBe(0);

    });

    test("car를 움직이면 distance가 1 증가한다", async () => {
        // given
        const car1 = new Car('a');
        const moveDecider = MoveDecider.fixed(true);
        // when
        car1.moveBy(moveDecider);
        const carDto = car1.makeCarDto();

        // then
        expect(carDto.distance).toBe(1);
    });

    test("car를 움직여도 MoveDecider가 false면 distance가 변하지 않는다", async () => {
        // given
        const car1 = new Car('a');
        const moveDecider = MoveDecider.fixed(false);
        // when
        car1.moveBy(moveDecider);
        const carDto = car1.makeCarDto();

        // then
        expect(carDto.distance).toBe(0);

    });
});

