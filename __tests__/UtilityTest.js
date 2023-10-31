import { Car } from '../src/Class/Car';
import { getWinnerArray, pickProgressRandomBool } from '../src/utils/calc';
import { mockRandoms } from './ApplicationTest';

describe('우승자 계산 기능 테스트', () => {
    test('우승자의 출력 순서는 최초 입력된 이름의 순서를 따라야 한다.', async () => {
        const names = ['foo', 'bar', 'baz'];
        const cars = names.map((name) => new Car(name));
        const moves = [
            [0, 0, 2],
            [2, 0, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];
        const answers = [
            ['baz'],
            ['foo', 'baz'],
            ['foo', 'baz'],
            ['foo', 'bar', 'baz'],
        ];

        moves.forEach((move, i) => {
            cars.forEach((car, j) => (car.progress += move[j]));
            const result = getWinnerArray(cars);

            expect(result).toEqual(answers[i]);
        });
    });
});

describe('전진 랜덤 참/거짓 값 생성 기능 테스트', () => {
    test('변수로 주어진 수가 4 이상일 경우에만 True를 반환해야 한다.', async () => {
        const randoms = [
            [4, 7, 3, 2, 9, 1, 3, 5, 8, 4],
            [5, 2, 3, 4, 4, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 8, 7, 6, 5, 4, 3],
            [3, 2, 1, 4, 5, 8, 3, 4, 9, 2],
        ].reduce((acc, cur) => acc.concat(cur));
        mockRandoms(randoms);
        const answers = [
            [true, true, false, false, true, false, false, true, true, true],
            [true, false, false, true, true, false, false, false, true, true],
            [true, true, true, true, true, true, true, true, true, false],
            [false, false, false, true, true, true, false, true, true, false],
        ].reduce((acc, cur) => acc.concat(cur));

        answers.forEach((answer) => {
            expect(pickProgressRandomBool()).toEqual(answer);
        });
    });
});
