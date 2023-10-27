const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("유닛 테스트", () => {
  test("readCarsInput 공백 에러", () => {
    const answer = [" car,car34,car1"];
    mockQuestions(answer);

    expect(readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
    );
  });
  test("readCarsInput 길이 에러 ", () => {
    const answer = ["carcar,car34,car1"];
    mockQuestions(answer);

    expect(readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다."
    );
  });
  test("readCarsInput 중복 에러", () => {
    const answer = ["carcar,car34,car1"];
    mockQuestions(answer);

    expect(readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름에 중복이 있습니다."
    );
  });
});
