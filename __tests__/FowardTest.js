import { Car } from '../src/CarInfo.js';

describe('자동차 정보 생성', () => {
    let car;

    beforeEach(() => {
        car = new Car('pobi');
    });

    test('자동차 정보', () => {
        expect(car.name).toBe('pobi');
        expect(car.foward).toBe(0);
    });

    describe('랜덤 숫자에 따른 이동 검사', () => {
        test('랜덤 숫자가 4 이상일 경우, foward 증가', () => {
            car.goFoward(4);
            expect(car.foward).toBe(1);
            
            car.goFoward(9);
            expect(car.foward).toBe(2);
        });

        test('랜덤 숫자가 4 미만일 경우, foward 변동 없음', () => {
            car.goFoward(3);
            expect(car.foward).toBe(0);
            
            car.goFoward(0);
            expect(car.foward).toBe(0);
        });
    });
});
