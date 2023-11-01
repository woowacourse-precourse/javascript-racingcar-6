import Validation from "../src/Validation";

describe("자동차 이름 테스트", () => {
  test("이름의 글자수 제한을 지키지 않은 경우", () => {
    const input = "interstella,suchan";

    expect(() => Validation.carNames(input)).toThrow(
      "[ERROR] 이름은 최소 1자에서 최대 5자까지 가능합니다."
    );
  });

  test("이름이 중복되는 경우", () => {
    const input = "sum,sum";

    expect(() => Validation.carNames(input)).toThrow(
      "[ERROR] 이름이 중복되었습니다. 서로 다른 이름을 입력해주세요."
    );
  });

  test("자동차가 1대 이하인 경우", () => {
    const input = "sum";

    expect(() =>
      Validation.carNames(input).toThrow(
        "[ERROR] 자동차는 최소 2대가 있어야지 경주가 가능합니다."
      )
    );
  });

  test("공백이 포함된 경우", () => {
    const input = "sum, chan";

    expect(() => Validation.carNames(input)).toThrow(
      "[ERROR] 공백 없이 입력해주세요."
    );
  });
});
