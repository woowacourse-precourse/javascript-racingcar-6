import findWinner from "../src/utils/findWinner.js";
import generateRandomNumber from "../src/utils/generateRandomNumber.js";
import makeStringCurrentRacingState from "../src/utils/makeStringCurrentRacingState.js";
import moveForward from "../src/utils/moveForward.js";
import sortArray from "../src/utils/sortArray.js";

describe("utils 폴더에 있는 함수들에 대한 테스트", () => {
  test("findWinner 함수를 사용해서 배열에서 우승자가 한명일 경우 길이가 1일 배열 반환", () => {
    const input = [
      { car: "first", currentState: 3 },
      { car: "second", currentState: 2 },
      { car: "third", currentState: 1 },
    ];
    const result = findWinner(input);

    expect(result).toStrictEqual([{ car: "first", currentState: 3 }]);
  });

  test("findWinner 함수를 사용해서 배열에서 우승자가 여러명일 경우 길이가 우승자 수만큼의 배열 반환", () => {
    const input = [
      { car: "first1", currentState: 3 },
      { car: "first2", currentState: 3 },
      { car: "first3", currentState: 3 },
      { car: "second", currentState: 2 },
      { car: "third", currentState: 1 },
    ];
    const result = findWinner(input);

    expect(result).toStrictEqual([
      { car: "first1", currentState: 3 },
      { car: "first2", currentState: 3 },
      { car: "first3", currentState: 3 },
    ]);
  });

  test("sortArray 함수를 사용해서 배열을 currentState 기준 내림차순으로 정렬", () => {
    const input = [
      { car: "first", currentState: 3 },
      { car: "third", currentState: 1 },
      { car: "second", currentState: 2 },
    ];
    const result = sortArray(input);

    expect(result).toStrictEqual([
      { car: "first", currentState: 3 },
      { car: "second", currentState: 2 },
      { car: "third", currentState: 1 },
    ]);
  });

  test("generateRandomNumber 함수를 사용해서 0에서 9사이의 정수를 랜덤하게 생성", () => {
    const NumberRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = generateRandomNumber();

    expect(NumberRange).toContain(result);
  });

  test("makeStringCurrentRacingState 함수를 사용해서 경기 진행상황을 나타내는 문자열을 생성", () => {
    const input = { car: "first", currentState: 3 };
    const result = makeStringCurrentRacingState(input);

    expect(result).toBe("first : ---");
  });

  test("moveForward 함수를 사용해서 전진 조건에 해당하는 수가 들어오면 true, 아닐경우 false를 반환하는 함수 작성", () => {
    const inputReturnTrue = 4;
    const inputReturnFalse = 0;
    const resultTrue = moveForward(inputReturnTrue);
    const resultFalse = moveForward(inputReturnFalse);

    expect(resultTrue).toBe(true);
    expect(resultFalse).toBe(false);
  });
});
