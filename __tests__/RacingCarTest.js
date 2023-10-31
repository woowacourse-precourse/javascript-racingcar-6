import RacingCar from "../src/RacingCar.js";
import {MissionUtils} from "@woowacourse/mission-utils";

describe('경주 테스트', () => {
    let racingCar;
    let CARNAME_RESPONSE = ['car1', 'car2', 'car3'];
    let PLAYTIME_RESPONSE = 2;

    beforeEach(() => {
        racingCar = new RacingCar(CARNAME_RESPONSE, PLAYTIME_RESPONSE);
    });

    test('RacingCar 객체가 AboutCar 인스턴스 목록과 함께 정상적으로 생성되는지 확인', () => {
        expect(racingCar).toBeInstanceOf(RacingCar);
        expect(racingCar.CARNAMES.length).toBe(3);
    });

    test('runRace 테스트', () => {
        jest.spyOn(racingCar.CARNAMES[0], 'decideMotion').mockImplementation(() => {
            racingCar.CARNAMES[0].position += 1;
        });

        racingCar.runRace();
        expect(racingCar.CARNAMES[0].position).toBe(2);
    });

    test('RoundResult 테스트', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        racingCar.RoundResult();

        expect(consoleSpy).toHaveBeenCalledTimes(CARNAME_RESPONSE.length);

        consoleSpy.mockRestore();
    });

    test('Winner 테스트', () => {
        racingCar.CARNAMES[0].position = 5;
        racingCar.CARNAMES[1].position = 3;
        racingCar.CARNAMES[2].position = 1;

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        racingCar.Winner();

        expect(consoleSpy).toHaveBeenCalledWith('최종 우승자 : car1');

        consoleSpy.mockRestore();
    });
});
