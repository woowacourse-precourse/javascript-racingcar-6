import { RacingGame } from '../src/Class/RacingGame';
import { mockRandoms } from './ApplicationTest';

describe('레이싱 게임 기능 테스트', () => {
    test('한 라운드가 시작될 때, 모든 차량은 진행을 시도하여야 한다.', async () => {
        const randoms = [
            [4, 7, 3, 2, 9],
            [1, 3, 5, 8, 4],
            [5, 2, 3, 4, 4],
            [1, 2, 3, 4, 5],
            [6, 7, 8, 3, 3],
            [9, 8, 7, 6, 5],
            [4, 3, 2, 1, 4],
            [5, 8, 3, 4, 9],
            [2, 1, 4, 4, 5],
        ].reduce((acc, cur) => acc.concat(cur));
        const answers = [
            [1, 1, 0, 0, 1],
            [1, 1, 1, 1, 2],
            [2, 1, 1, 2, 3],
            [2, 1, 1, 3, 4],
            [3, 2, 2, 3, 4],
            [4, 3, 3, 4, 5],
            [5, 3, 3, 4, 6],
            [6, 4, 3, 5, 7],
            [6, 4, 4, 6, 8],
        ];
        mockRandoms(randoms);
        const racingGame = new RacingGame(
            Array.from({ length: 5 }, (_, i) => i),
        );

        for (const answer of answers) {
            racingGame.playSingleRound();

            racingGame.cars.forEach((car, i) => {
                expect(car.progress).toEqual(answer[i]);
            });
        }
    });

    test('게임은 주어진 이름에 대해 순차적으로 차량을 생성해야 한다.', async () => {
        const names = ['foo', 'bar', 'baz', 'qux', 'fred', 'thud', 'corge'];
        const racingGame = new RacingGame(names);

        racingGame.cars.forEach((car, i) => {
            expect(car.name).toEqual(names[i]);
        });
    });
});
