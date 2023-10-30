import Input from "../src/Input";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("Input Test", () => {
  test("입력받은 이름의 공백(띄어쓰기 포함) 없애기", async () => {
    //given
    const INPUT_STRING = "as aa, t e s,aa  ";

    //when
    const input = new Input();
    mockQuestions([INPUT_STRING]);

    //then
    const strs = await input.inputCarName();
    expect(strs).toContain("asaa");
    expect(strs).toContain("tes");
    expect(strs).toContain("aa");
  });

  test("이름이 공백인 경우 (입력하지 않은 경우) Error", async () => {
    //given
    const INPUT_STRING = "abc, ,a";

    //when
    const input = new Input();
    mockQuestions([INPUT_STRING]);

    //then
    await expect(input.inputCarName()).rejects.toThrow("[ERROR]");
  });

  test("5글자 이상인 경우 Error", async () => {
    //given
    const INPUT_STRING = "abcaaa,aa,a";

    //when
    const input = new Input();
    mockQuestions([INPUT_STRING]);

    //then
    await expect(input.inputCarName()).rejects.toThrow("[ERROR]");
  });
});
