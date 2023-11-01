import CarName from "../src/controller/carNameController.js";
import {MissionUtils} from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe('자동차 이름 테스트', () => {
    test('5자 이하 이름 정상테스트', () => {
        const car = new Car('CAR123');
        expect(car.name).toBe('CAR123');
    });
    test('자동차 이름 다섯글자 이하 예외처리', async () => {
        mockQuestions(['dohyun1,dohy']);

        const carName = new CarName();

        await expect(carName.start()).rejects.toThrow('[ERROR]');
    });

    test('자동차 이름은 쉼표 위치 확인', async () => {
        mockQuestions([',do,doj']);

        const carName = new CarName();

        await expect(carName.start()).rejects.toThrow('[ERROR]');
    });
    test('자동차 이름은 쉼표 중복', async () => {
        mockQuestions(['car,,doo']);

        const carName = new CarName();

        await expect(carName.start()).rejects.toThrow('[ERROR]');
    });
    test('자동차 이름은 같은이름이 없이 작성한다.', async () => {
        mockQuestions(['do,do']);

        const carName = new CarName();

        await expect(carName.start()).rejects.toThrow('[ERROR]');
    });
});