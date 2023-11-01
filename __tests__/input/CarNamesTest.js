import { Console } from "@woowacourse/mission-utils";
import { getCarNames } from "../../src/input/carNames"
import { Input } from "../../src/interface/Input";


test("자동차 이름 입력", async ()=>{
    jest.spyOn(Console, "readLineAsync").mockResolvedValue("pobi,hj,jedi");
    const result = await getCarNames();

    expect(result).toContain("pobi", "hj", "jedi");
})