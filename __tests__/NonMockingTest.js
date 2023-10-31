import { RacingGame } from '../src/Class/RacingGame';

describe('비모킹 테스트', () => {
    test('미션 모듈을 통해 실행한 결과는 카이 제곱 검정의 신뢰 범위 이내에 있어야 한다.', async () => {
        const LENGTH = 50000;
        const PERCENTAGE = 0.6;
        const TARGET_VALUE = 3.841;
        const expectedProgress = LENGTH * PERCENTAGE;
        const expectedStop = LENGTH * (1 - PERCENTAGE);

        const racingGame = new RacingGame(['foo']);
        const car = racingGame.cars[0];

        for (let i = 0; i < LENGTH; i++) racingGame.playSingleRound();
        const testValue = [
            (car.progress - expectedProgress) ** 2 / expectedProgress,
            (LENGTH - car.progress - expectedStop) ** 2 / expectedStop,
        ].reduce((a, b) => a + b);

        expect(testValue).toBeLessThanOrEqual(TARGET_VALUE);
    });
});
