import { enterCarName, enterMoveCount } from "../src/utils/playerInput.js";
import { mockQuestions } from "./mocks.js";

describe("기능: 이름 입력", () => {
  test("정상 입력", async () => {
    expect.assertions(1);
    // given
    mockQuestions(["lulu, nana, amy"]);

    // when

    //then
    expect(await enterCarName()).toContain("lulu", "nana", "amy");
    // expect(await carNames).toContainEqual("lulu, nana, amy");
  });
  test.each([
    ["빈 입력일 떄", [""]],
    ["이름이 1개일 때", ["amy"]],
    ["5자를 초과하는 이름일 떄", ["chungha, park"]],
    ["빈 이름일 떄", [", hello"]],
    ["중복된 이름이 있을 떄", ["me, me, you"]],
    [
      "총 개수가 10개를 초과할 때",
      ["one, two, three, four, five, six, seven, eight, nine, ten, more"],
    ],
  ])("[ERROR]: %s", async (testName, inputs) => {
    expect.assertions(1);
    // given
    mockQuestions(inputs);

    //when

    //then
    await expect(enterCarName()).rejects.toThrow("[ERROR]");
  });
});

describe("기능: 이동 횟수 입력", () => {
  test("정상 입력", async () => {
    expect.assertions(1);
    //given
    mockQuestions([5]);

    //when

    // then
    expect(await enterMoveCount()).toBe(5);
  });
  test.each([
    ["빈 입력일 때", [""]],
    ["횟수가 0일 때", [0]],
    ["횟수가 100번 초과일 때", [101]],
    ["입력이 숫자가 아닐 때", ["a9"]],
  ])("[ERROR]: %s", async (testName, inputs) => {
    expect.assertions(1);
    // given
    mockQuestions(inputs);

    // when

    // then
    await expect(enterCarName()).rejects.toThrow("[ERROR]");
  });
});
