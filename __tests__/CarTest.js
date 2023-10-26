import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
    test('자동차 이름 반환', () => {
        const car = new Car('myCar');
        const result = car.getCarName();
        expect(result).toEqual('myCar');
    });

    test('자동차 이동', () => {
        const car = new Car('myCar');
        
        car.moveForward();
        const result = car.getForwardDistance();
        expect(result).toEqual(1);
    });

})