import { CREATE_CARS } from '../src/Race';  
import Car from '../src/Car';

describe('Race 테스트', () => {
    describe('CREATE_CARS 함수 테스트', () => {
        test('주어진 자동차 이름 배열로 Car 인스턴스 배열 생성', () => {
            const CAR_NAMES = ['car1', 'car2'];
            const CARS = CREATE_CARS(CAR_NAMES);
            expect(CARS.length).toBe(2);
            expect(CARS[0]).toBeInstanceOf(Car);
            expect(CARS[1]).toBeInstanceOf(Car);
            expect(CARS[0].name).toBe('car1');
            expect(CARS[1].name).toBe('car2');
        });
    });
});