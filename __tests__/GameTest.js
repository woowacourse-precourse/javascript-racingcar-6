import Game from "../src/game/game.js";
import {MissionUtils} from "@woowacourse/mission-utils";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("Game 클래스 기능 단위테스트", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test("게임 초기화 기능 테스트", () => {
        const carsList = ["pobi", "woni", "jun"];
        game.initializeGame(carsList);

        expect(game.carsList).toEqual(carsList);
        expect(game.carProgresses).toEqual(["", "", ""]);
    });

    test("게임 한 턴 진행 테스트", () => {
        game.initializeGame(["car1", "car2"]);
        game.racing();

        expect(game.carProgresses).toHaveLength(2);
        expect(game.carProgresses[0]).toMatch(/-*/);
        expect(game.carProgresses[1]).toMatch(/-*/);
    });

    test("우승자 판단 기능 테스트", () => {
        game.carsList = ["pobi", "woni", "jun"];
        game.carProgresses = ["--", "----", "---"];
        const winners = game.getWinner();

        expect(winners).toEqual(["woni"]);
    });

    test("우승자 출력 기능 테스트 - 우승자가 한명일 경우", () => {
        game.carsList = ["pobi", "woni", "jun"];
        game.carProgresses = ["--", "----", "---"];
        const expectedResult = "최종 우승자 : woni";

        const logSpy = getLogSpy();

        game.showWinner();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedResult));
    });

    test("우승자 출력 기능 테스트 - 우승자가 여러명일 경우", () => {
        game.carsList = ["car1", "car2", "car3"];
        game.carProgresses = ["--", "---", "---"];
        const expectedResult = "최종 우승자 : car2,car3";

        const logSpy = getLogSpy();

        game.showWinner();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedResult));
    });

    test("무작위수 생성 기능 테스트", () => {
        const randomNumber = game.generateRandomNumber();

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThan(10);
    });
});
