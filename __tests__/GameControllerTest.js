import GameController from "../src/Game/GameController.js";
import Car from "../src/Game/Car.js";
import { MESSAGES } from "../src/constants/index.js";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockQuestion = (input) => {
    const mockFn = jest.fn();
    MissionUtils.Console.readLineAsync = mockFn;
    return mockFn.mockImplementation(() => Promise.resolve(input));
}


describe("GameController 클래스 테스트", () => {
    let gameController;
    beforeEach(() => {
        gameController = new GameController();
    })
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
    

});
