import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("story1. 자동차 이름 입력", () => {
  test("입력을 받아서 문자열을 반환한다.", async () => {
    // given
    const input = ['산,바다,강,하늘'];
    const answer = '산,바다,강,하늘';

    mockQuestions(input);
    const result = await MissionUtils.Console.readLineAsync();

    // when
    expect(result).toEqual(answer);
  });

  test("문자열을 받아서 배열로 반환한다.", () => {
    const input = "산,바다,강,하늘";
    const result = input.split(",");

    expect(result).toContain("산", "바다", "강", "하늘");
    expect(result).toContainEqual("산", "바다", "강", "하늘");
  });
});

describe("story2. 실행횟수 입력", () => {
  test("입력을 받아서 숫자를 반환한다.", async () => {
    // given
    const input = '7';
    const result = Number(input);

    expect(result).toEqual(7);
  });
});

// describe("story4. 차수별 진행상황 출력", () => {
//   test("자동차 이름을 가지고, 기록용 배열을 만든다.", async () => {
//     // given
//     const array = '['산','바다','강','하늘'];
//     const answer = ['산 : ','바다 : ','강: ','하늘: '];

//     expect(result).toEqual(7);
//   });
// });
