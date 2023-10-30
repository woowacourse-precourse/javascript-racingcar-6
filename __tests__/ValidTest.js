import { getCarNames, getTryCount } from "../src/views/InputView";
import { isValidInput, isValidCount } from "../src/models/IsValidInput";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };

describe('사용자의 입력값에 대한 유효성 테스트', () => {
    //자동차 이름 유효성 검사
    test('올바른 자동차 이름을 넣은 경우', async () => {
        const carInput = "pobi,crong,woong";
        const result = ["pobi","crong","woong"];

        mockQuestions(carInput);

        const name = await getCarNames();
        const validatedName = isValidInput(name);
        expect(validatedName).toEqual(result);
    })

    test.each([
        [[""]],
        [["pobieastjun"]],
        [["pobi"]],
        [["pobi,eastjun"]],
        [["pobi,,eastjun"]],
        [["pobi, ,eastjun"]],
        [["pobi,pobi"]]
    ])("유효하지 않은 자동차 이름에 대한 예외처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // then
        const name = await getCarNames();
        expect(() => isValidInput(name)).toThrowError("[ERROR]");
    });

    //시도횟수 유효성 검사
    test('올바른 시도 횟수를 넣은 경우', async () => {
        const carInput = '2';
        const result = 2;

        mockQuestions(carInput);

        const count = await getTryCount();
        const validatedCount = isValidCount(count);
        expect(validatedCount).toEqual(result);
    })
    test.each([
        [""],
        ["a"]
    ])("유효하지 않은 시도 횟수에 대한 예외처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // then
        const count = await getTryCount();
        expect(() => isValidCount(count)).toThrow("[ERROR]");
    });
})