import { decideCarMoveForward } from '../src/utils/decideCarAction.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandom = (number) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockReturnValue(number);
};

describe('자동차 행동 테스트', () => {
    test('자동차 전진', () => {
        const input = 5;
        const ouput = true;
        mockRandom(input);

        expect(decideCarMoveForward()).toEqual(ouput);
    });

    test('자동차 정지', () => {
        const input = 3;
        const ouput = false;
        mockRandom(input);

        expect(decideCarMoveForward()).toEqual(ouput);
    });
});