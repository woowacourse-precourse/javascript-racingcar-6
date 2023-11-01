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

describe("Car getDistance", () => {
    const car = new Car("test");
    test("getDistance은 Function type이다 ", () => {
		expect(typeof car.getDistance).toBe("function");
	})
	test('car.getDistance은 값을 정상적으로 리턴한다. ', () => {
        const car = new Car("test");
		expect(car.getDistance()).toStrictEqual(0);
	});
})

describe("Car oneStepForward", () => {
    const car = new Car("test");
    test("oneStepForward은 Function type이다 ", () => {
		expect(typeof car.oneStepForward).toBe("function");
	})
    test("Random.pickNumberInRange가 호출된다 ", () => {
        Random.pickNumberInRange = jest.fn();
        Random.pickNumberInRange.mockReturnValue(1);
        car.oneStepForward();
        expect(Random.pickNumberInRange).toHaveBeenCalled();
    })
    test("oneStepForward은 distance에 값을 추가한다 ", () => {
        Random.pickNumberInRange = jest.fn();
        Random.pickNumberInRange.mockReturnValue(5);
        car.oneStepForward();
		expect(car.getDistance()).toBe(1);
	})
})
