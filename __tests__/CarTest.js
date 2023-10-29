import Car from '../src/Game/Car';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};
const mockRandom = (number) => {
    const mockFn = jest.fn();
    MissionUtils.Random.pickNumberInRange = mockFn;
    return mockFn.mockReturnValueOnce(number);
}
describe('Car 클래스 테스트', () => {
    let car;
    beforeEach(() => {
        car = new Car('car1');
    })
    
    test("car 인스턴스 생성", () => {
        const answer = {
            name: 'car1',
            distance: ''
        }
        expect(car).toEqual(answer);
    });

    test("isMove() 테스트", () => {
        const MOVING_FORWARD = 4;
        const answer = true;
        mockRandom(MOVING_FORWARD);
        const result = car.isMove();
        expect(result).toBe(answer);
    });

    test.each([
        [4, "-"],
        [3, ""]
    ])("move() 테스트 - input: %p, 예상 결과: %p", (input, result) => {
        mockRandom(input);
        car.move();
        expect(car.distance).toBe(result);
    });

    test("getDistance() 테스트", () => {
        const MOVING_FORWARD = 4;
        mockRandoms(
            [   MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD
            ]
        )
        for(let i =0; i<4; i++){
            car.move();
        }
        const distance = car.getDistance();
        expect(distance).toBe(4);
    });

    test("toStringResult() 테스트", () => {
        const toString = car.toStringResult();
        const answer = "car1 : ";
        expect(toString).toBe(answer);
    });
});