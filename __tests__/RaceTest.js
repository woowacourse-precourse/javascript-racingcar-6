import RacingGame from '../src/race.js';
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => {
    return {
        ...jest.requireActual("@woowacourse/mission-utils"),
         MissionUtils: {
              Random: {
                pickNumberInRange: jest.fn(),
                },
            },
        };
    });

describe("RacingGame 클래스 테스트", () => {
    let cars;

    beforeEach(() => {
        cars = [
        { name: 'Car1', position: '-' },
        { name: 'Car2', position: '' }
        ];
    });

    test('race 메서드 테스트', () => {
        MissionUtils.Random.pickNumberInRange
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3);

        const racingGame = new RacingGame();
        racingGame.race(cars);

        expect(cars[0].position).toBe('--');
        expect(cars[1].position).toBe('');
    });


    test('getRaceCount 메서드 테스트', () => {
        MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(3);
        const racingGame = new RacingGame();
        const updatedPosition = racingGame.getRaceCount('-');
        expect(updatedPosition).toBe('-');
    });
});
