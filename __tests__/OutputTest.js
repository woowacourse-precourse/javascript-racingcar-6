import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/constants.js";
import { Output } from "../src/interface/Output.js";

test("출력", async ()=> {
    const output = MESSAGE.CAR_NAME.INPUT;
    const outputSpy = jest.spyOn(Console, "print");

    Output(output);
    expect(outputSpy).toHaveBeenCalledWith(output);    
})