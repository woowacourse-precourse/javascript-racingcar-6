import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";
import Car from "../src/Car";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("기능 목록 테스트", () => {
    test("자동차 쉼표(,)기준 파싱 테스트", async () => {
        // given
        const inputs = ["jeje,tom,ban,gyim"];
        const carNames = inputs[0].split(',');

        mockQuestions(inputs);

        // when
        const app = new App();
        await app.parseCarNamesInput();

        const result = [];
        app.carList.map((car) => {
            result.push(car.getName());
        });

        // then
        expect(result).toEqual(expect.arrayContaining(carNames));
    });

    test("자동차 전진 시도 횟수 파싱 테스트", async () => {
        // given
        const inputs = ["5"];

        mockQuestions(inputs);

        //when
        const app = new App();
        await app.parseGameRoundsInput();

        // then
        expect(app.gameRounds).toEqual(5);
    });

    test("Car 클래스 테스트", () => {
        //given
        const car = new Car();

        //when
        jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(5);
        car.tryMoveForward();

        jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(3);
        car.tryMoveForward();

        //then
        expect(car.getMoveCount()).toEqual(1);
    });

    test.each([
        [["1.2"]],
        [["-123"]],
        [["abcd123"]]
    ])("라운드 횟수입력에 대한 예외처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.parseGameRoundsInput()).rejects.toThrow("[ERROR]");
    });
});