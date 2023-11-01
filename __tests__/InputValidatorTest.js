import InputValidator from "../src/InputValidator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("올바른 입력 검사기", () => {
  test("참가자 이름 배열 반환", async () => {
    // given
    const outputs = ["yeeun", "minji"];

    mockQuestions(["yeeun,minji"]);

    // when
    const inputValidator = new InputValidator();

    // then
    expect(await inputValidator.getValidMemberName()).toEqual(outputs);
  });

  test("빈 문자열 입력에 대한 예외처리", async () => {
    // given
    mockQuestions([""]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidMemberName()).rejects.toThrow(
      "[ERROR] 경주할 자동차 이름을 1개 이상 입력해주세요."
    );
  });

  test.each("공백, 빈 문자, 괄호, 따옴표, 특수문자 입력에 대한 예외처리", async () => {
    // given
    mockQuestions(
      ["minji, lisa,jisoo"],
      ["minji, ,lisa"],
      ["[minji,lisa,jisoo]"],
      ["minji,lisa,j'soo"],
      ["min&ji,lisa,ji$oo"]
    );

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidMemberName()).rejects.toThrow(
      "[ERROR] 공백, 빈 문자, 괄호, 따옴표, 특수문자는 포함할 수 없습니다."
    );
  });

  test("이름의 5자 이상 입력에 대한 예외처리", async () => {
    // given
    mockQuestions(["minjiiii,yeeunnnn"]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidMemberName()).rejects.toThrow("[ERROR] 이름은 5자 이하로 입력 가능합니다.");
  });

  test("10개 이상 이름 입력에 대한 예외처리", async () => {
    // given
    mockQuestions(["a,b,c,d,e,f,g,h,i,j,k,l"]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidMemberName()).rejects.toThrow("[ERROR] 이름은 총 10개까지 입력 가능합니다.");
  });

  test("중복 이름 입력에 대한 예외처리", async () => {
    // given
    mockQuestions(["minji,minji,yeeun"]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidMemberName()).rejects.toThrow("[ERROR] 중복된 이름은 입력할 수 없습니다.");
  });

  test("시도횟수 입력 반환", async () => {
    // given
    mockQuestions([5]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidRoundNumber()).resolves.toEqual(5);
  });

  test("시도횟수 입력을 하지 않았을 때에 대한 예외처리", async () => {
    // given
    mockQuestions([""]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidRoundNumber()).rejects.toThrow("[ERROR] 시도 횟수를 입력해주세요.");
  });

  test("자연수를 입력하지 않았을 때에 대한 예외처리", async () => {
    // given
    mockQuestions([3.5]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidRoundNumber()).rejects.toThrow("[ERROR] 시도 횟수는 자연수여야 합니다.");
  });

  test("정해진 시도횟수 범위에서 벗어났을 때에 대한 예외처리", async () => {
    // given
    mockQuestions([40]);

    // when
    const inputValidator = new InputValidator();

    // then
    await expect(inputValidator.getValidRoundNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 1 이상 20 미만이어야 합니다."
    );
  });
});
