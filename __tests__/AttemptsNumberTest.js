import attemptsNumberInput from "../src/components/ui/attempts_number_input";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockCarName = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(inputs);
};

describe("시도 횟수 입력에 대한 테스트", () => {
    test("자연수가 들어왔을 경우", async () => {
        //given
        const input = 5;
        mockCarName(input);

        //when
        const output = await attemptsNumberInput();
        
        //then
        expect(output).toEqual(5);
    });

    test("0 이하의 정수가 들어왔을 경우", async () => {
        //given
        const input = 0;
        mockCarName(input);
        //when
        //then
        await expect(attemptsNumberInput()).rejects.toThrow("[ERROR]");
    });

    test("자연수가 아닌 실수가 들어왔을 경우", async () => {
        //given
        const input = 3.5;
        mockCarName(input);
        
        //when
        //then
        await expect(attemptsNumberInput()).rejects.toThrow("[ERROR]");
    });
});
  