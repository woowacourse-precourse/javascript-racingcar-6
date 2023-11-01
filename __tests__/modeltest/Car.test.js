import Car from "../../src/model/Car";
import testConstant from "../../t_constant/modelConstant";
import { Random } from '@woowacourse/mission-utils';

describe("Car class", () => {
	test("Car는 클래스입니다 ", () => {
		expect(typeof Car).toBe("function");
	})
    test("Car에서 객체가 생성됩니다.", () => {
        expect(typeof new Car(0, 0)).toBe("object");
    })
});

describe("Car getName", () => {
    const car = new Car("test");
	test("getName은 Function type이다 ", () => {
		expect(typeof car.getName).toBe("function");
	})
	test('car.getName은 값을 정상적으로 리턴한다. ', () => {
		testConstant.CarName.forEach (({input, expected}) => {
            const car = new Car(input);
			expect(car.getName()).toStrictEqual(expected);
		});
	});
});
