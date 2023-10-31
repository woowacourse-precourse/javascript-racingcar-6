import { Car } from '../src/Class/Car';

describe('자동차 테스트', () => {
    test('move 메서드를 실행하면 자동차의 progress는 1 증가해야 한다', async () => {
        const car = new Car('foo');
        const mockedProgressArray = [
            [4, 7, 3, 2, 9, 1, 3, 5, 8, 4],
            [4, 5, 2, 3, 4, 4, 1, 2, 3, 2],
            [4, 5, 6, 7, 8, 9, 8, 0, 1, 3],
            [7, 6, 5, 4, 3, 2, 1, 4, 5, 8],
            [3, 4, 9, 2, 1, 4, 4, 5, 3, 4],
            [2, 2, 5, 6, 3, 4, 5, 2, 4, 1],
            [5, 5, 4, 7, 1, 2, 2, 1, 5, 5],
            [8, 3, 8, 9, 8, 5, 3, 5, 8, 1],
        ].reduce((acc, cur) => acc.concat(cur));

        mockedProgressArray.forEach((givenNumber) => {
            car.progress = givenNumber;
            car.move();
            expect(car.progress).toEqual(givenNumber + 1);
        });
    });
});
