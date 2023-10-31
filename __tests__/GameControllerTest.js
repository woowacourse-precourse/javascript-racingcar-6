import GameController from "../src/Game/GameController.js";
import Car from "../src/Game/Car.js";
import { MESSAGES } from "../src/constants/index.js";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockQuestion = (input) => {
    const mockFn = jest.fn();
    MissionUtils.Console.readLineAsync = mockFn;
    return mockFn.mockImplementation(() => Promise.resolve(input));
}
const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};


describe("GameController 클래스 테스트", () => {
    const gameController = new GameController();

    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const mockFn3 = jest.fn();

    gameController.racing.moveCycle = mockFn1;
    gameController.racing.oneMoveCycleResult = mockFn2;
    gameController.racing.getWinner = mockFn3;

    test("inputCars() 테스트 ", async () => {
        const input = "car1,car2,car3"
        const answer = [
            new Car('car1'),
            new Car('car2'),
            new Car('car3'),
        ]
        mockQuestion(input);
        await gameController.inputCars();
        const result = gameController.racing.cars;
        expect(result).toEqual(answer);

    });
    test("inputTryMoveCount() 테스트", async () => {
        const input = "3";
        mockQuestion(input);
        await gameController.inputTryMoveCount();
        const result = gameController.count;
        expect(result).toEqual(input);
    });

    test("start() 테스트", () => {
        const logSpy = getLogSpy();

        const count = Number(gameController.count);

        gameController.start();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(MESSAGES.PROGRESS_RESULT));
        expect(mockFn1).toHaveBeenCalledTimes(count);
        expect(mockFn2).toHaveBeenCalledTimes(count);


    })

    test("result() 테스트", () => {

        const logSpy = getLogSpy();

        gameController.result();
        
        expect(mockFn3).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`${MESSAGES.WINNER}`))

    })

});
