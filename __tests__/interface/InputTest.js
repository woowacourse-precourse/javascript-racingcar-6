import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../../src/constants";
import { Input } from "../../src/interface/Input";

test("입력", async ()=> {
    const placeHolder = MESSAGE.CAR_NAME.INPUT;
    const readSpy = jest.spyOn(Console, "readLineAsync").mockResolvedValue();

    await Input(placeHolder);
    expect(readSpy).toHaveBeenCalledWith(placeHolder);    
})