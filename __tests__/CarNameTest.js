import carNameInput from "../src/components/ui/car_name_input.js";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockCarName = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(inputs);
};

describe("자동차 이름 입력에 대한 테스트", () => {
    test("자동차 이름이 하나만 들어 왔을 경우", async () => {
        //given
        const input = "car1";
        mockCarName(input);

        //when
        const output = await carNameInput();

        //then
        expect(output).toContain("car1");
    });

    test("자동차 이름이 쉼표로 구분되었을 경우", async () => {
        //given
        const input = "car1,car2";
        mockCarName(input);
        
        //when
        const output = await carNameInput();
    
        //then
        expect(output).toContain("car2", "car1");
        expect(output).toContainEqual("car1", "car2");
    });

    test("자동차 이름이 5글자를 초과했을 경우", async () => {
        //given
        const input = "mini, Bently";
        mockCarName(input);
        
        //when
        //then
        await expect(carNameInput()).rejects.toThrow("[ERROR]");
    });
});
  