import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("story1. 자동차 이름 입력", () => {
  test("입력을 받아서 문자열을 반환한다.", async () => {
    // given
    const input = ['산,바다,강,하늘'];
    const answer = '산,바다,강,하늘';

    // when
    mockQuestions(input);
    const result = await MissionUtils.Console.readLineAsync();

    // then
    expect(result).toEqual(answer);
  });

  test("문자열을 받아서 배열로 반환한다.", () => {
    const input = "산,바다,강,하늘";
    const result = input.split(",");
    const answer = ['산', '바다', '강', '하늘'];

    expect(result).toEqual(answer);
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

describe("story4. 차수별 진행상황 출력", () => {
  test("자동차 이름을 가지고, 기록용 배열을 만든다.", async () => {
    // given
    const result = [];
    const array = ['산', '바다', '강', '하늘'];
    const answer = ['산 : ', '바다 : ', '강 : ', '하늘 : '];

    array.forEach((input) => {
      result.push(`${input} : `);
    });

    expect(result).toEqual(answer);
  });
});

describe("story4. 숫자가 4이상일 경우 record 배열에 '-' 추가", () => {
  test("자동차 이름을 가지고, 기록용 배열을 만든다.", async () => {
    // given
    const randoms = [9, 3, 2, 8];
    const result = ['산 : ', '바다 : ', '강 : ', '하늘 : '];
    const answer = ['산 : -', '바다 : ', '강 : ', '하늘 : -'];

    mockRandoms(randoms);

    // when
    for (let i = 0; i < result.length; i += 1) {
      const randomNum = MissionUtils.Random.pickNumberInRange();
      if (randomNum > 3) result[i] += '-';
    }

    expect(result).toEqual(answer);
  });
});

describe('story5. 최종 우승자 출력', () => {
  test("'-'의 인덱스 값 확인", () => {
    const input = '산 : -----';
    const result = input.lastIndexOf('-') - input.indexOf('-') + 1;
    expect(result).toEqual(5);
  });

  test("문자를 공백으로 나눈 배열을 반환한다.", () => {
    const input = '산 : -----';
    const result = input.split(' ');
    const answer = ['산', ':', '-----'];
    expect(result).toEqual(answer);
  });

  test("공백으로 나눈 배열에서 첫번째 원소를 반환한다.", () => {
    const input = ['산', ':', '-----'];
    const result = input[0];
    const answer = '산';
    expect(result).toEqual(answer);
  });
});
